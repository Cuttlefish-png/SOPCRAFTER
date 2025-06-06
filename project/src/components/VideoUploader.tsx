import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Link as LinkIcon, ExternalLink, Video } from 'lucide-react';
import { useSOPs } from '../contexts/SOPContext';

interface VideoUploaderProps {
  processing: boolean;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ processing }) => {
  const { uploadVideo, uploadVideoFromUrl } = useSOPs();
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [urlType, setUrlType] = useState<'loom' | 'youtube' | 'other'>('other');
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [error, setError] = useState('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setError('');
    if (acceptedFiles.length === 0) return;
    
    const videoFile = acceptedFiles[0];
    
    // Validate file type
    if (!videoFile.type.includes('video/')) {
      setError('Please upload a valid video file');
      return;
    }
    
    // Validate file size (50MB max)
    if (videoFile.size > 50 * 1024 * 1024) {
      setError('File size must be less than 50MB');
      return;
    }
    
    try {
      // Use the file name as title if not provided
      const videoTitle = title.trim() || videoFile.name.replace(/\.[^/.]+$/, "");
      await uploadVideo(videoFile, videoTitle);
      setTitle('');
    } catch (err) {
      setError('Error uploading video. Please try again.');
      console.error(err);
    }
  }, [title, uploadVideo]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.webm']
    },
    maxFiles: 1
  });

  const handleUrlUpload = async () => {
    setError('');
    if (!videoUrl.trim()) {
      setError('Please enter a valid URL');
      return;
    }
    
    // Very basic URL validation
    if (!videoUrl.startsWith('http')) {
      setError('Please enter a valid URL starting with http:// or https://');
      return;
    }
    
    try {
      // Use a default title if not provided
      const videoTitle = title.trim() || `Video from ${urlType} link`;
      await uploadVideoFromUrl(videoUrl, videoTitle);
      setTitle('');
      setVideoUrl('');
    } catch (err) {
      setError('Error processing video URL. Please try again.');
      console.error(err);
    }
  };

  // Helper to detect URL type
  const detectUrlType = (url: string) => {
    if (url.includes('loom.com')) {
      return 'loom';
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'youtube';
    }
    return 'other';
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-6 overflow-hidden">
        <h2 className="text-2xl font-bold mb-6">Create New SOP</h2>
        
        {/* Title Input */}
        <div className="mb-6">
          <label htmlFor="sop-title" className="block text-sm font-medium text-slate-700 mb-1">
            SOP Title (optional)
          </label>
          <input
            type="text"
            id="sop-title"
            className="input"
            placeholder="e.g., Shopify Product Upload Process"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="text-sm text-slate-500 mt-1">
            If left blank, we'll generate a title based on your video
          </p>
        </div>
        
        {/* Upload Type Tabs */}
        <div className="flex mb-6 border-b border-slate-200">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'upload' 
                ? 'text-red-600 border-b-2 border-red-600' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
            onClick={() => setActiveTab('upload')}
          >
            Upload Video
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'url' 
                ? 'text-red-600 border-b-2 border-red-600' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
            onClick={() => setActiveTab('url')}
          >
            Video URL
          </button>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}
        
        {/* File Upload */}
        {activeTab === 'upload' && (
          <div 
            {...getRootProps()} 
            className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors ${
              isDragActive ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-blue-400 hover:bg-slate-50'
            }`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center">
              <Upload className="h-12 w-12 text-slate-400 mb-4" />
              {isDragActive ? (
                <p className="text-lg font-medium text-red-600">Drop your video here</p>
              ) : (
                <>
                  <p className="text-lg font-medium mb-2">Drag & drop your video here</p>
                  <p className="text-slate-500">or click to browse files</p>
                  <p className="text-sm text-slate-400 mt-2">MP4, MOV, AVI, WEBM (max 50MB)</p>
                </>
              )}
            </div>
          </div>
        )}
        
        {/* URL Input */}
        {activeTab === 'url' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="video-url" className="block text-sm font-medium text-slate-700 mb-1">
                Video URL
              </label>
              <div className="flex">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LinkIcon className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="url"
                    id="video-url"
                    className="input pl-10"
                    placeholder="https://www.loom.com/share/..."
                    value={videoUrl}
                    onChange={(e) => {
                      setVideoUrl(e.target.value);
                      setUrlType(detectUrlType(e.target.value));
                    }}
                  />
                </div>
                <button 
                  className="btn btn-primary ml-2"
                  onClick={handleUrlUpload}
                  disabled={processing || !videoUrl.trim()}
                >
                  Process URL
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Paste a Loom, YouTube, or other video URL
              </p>
            </div>
            
            {/* URL Type Hints */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className={`p-4 border rounded-lg ${urlType === 'loom' ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}>
                <div className="flex items-center mb-2">
                  <ExternalLink className="h-5 w-5 mr-2 text-slate-600" />
                  <span className="font-medium">Loom</span>
                </div>
                <p className="text-sm text-slate-600">
                  Example: https://www.loom.com/share/abcdef123456
                </p>
              </div>
              
              <div className={`p-4 border rounded-lg ${urlType === 'youtube' ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}>
                <div className="flex items-center mb-2">
                  <Video className="h-5 w-5 mr-2 text-slate-600" />
                  <span className="font-medium">YouTube</span>
                </div>
                <p className="text-sm text-slate-600">
                  Example: https://www.youtube.com/watch?v=abc123
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Processing Indicator */}
        {processing && (
          <div className="mt-6 p-4 bg-red-50 rounded-lg flex items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600 mr-3"></div>
            <p className="text-red-600 font-medium">
              Processing your video... This may take a few minutes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoUploader;