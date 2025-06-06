import React, { useState } from 'react';
import { SOP, SOPStep, useSOPs } from '../contexts/SOPContext';
import { Download, Copy, ExternalLink, FileText, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { formatDistanceToNow } from '../utils/dateUtils';

interface SOPViewerProps {
  sop: SOP;
}

const SOPViewer: React.FC<SOPViewerProps> = ({ sop }) => {
  const { exportSOP } = useSOPs();
  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>({});
  const [exporting, setExporting] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const toggleStep = (stepId: string) => {
    setExpandedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };
  
  const handleExport = async (format: 'pdf' | 'markdown') => {
    setExporting(true);
    try {
      const exportUrl = await exportSOP(sop.id, format);
      // Normally we'd trigger download here, but for mock we'll just show it's done
      setTimeout(() => {
        setExporting(false);
        alert(`SOP exported as ${format.toUpperCase()}! (Mock URL: ${exportUrl})`);
      }, 1500);
    } catch (error) {
      console.error('Export error:', error);
      setExporting(false);
    }
  };
  
  const handleCopyToClipboard = () => {
    // Create a text representation of the SOP
    const sopText = `# ${sop.title}\n\n` + 
      sop.steps.map((step, index) => `## Step ${index + 1}: ${step.text}`).join('\n\n');
    
    navigator.clipboard.writeText(sopText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };
  
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="p-6 bg-slate-50 border-b">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <div className="flex items-center">
              <button 
                className="mr-2 p-1 rounded-full hover:bg-slate-200 transition-colors"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5 text-slate-600" />
              </button>
              <h2 className="text-2xl font-bold">{sop.title}</h2>
            </div>
            <p className="text-slate-500 text-sm mt-1">
              Created {formatDistanceToNow(sop.created)} ago • {sop.steps.length} steps
            </p>
          </div>
          
          <div className="flex mt-4 md:mt-0 space-x-2">
            <button 
              className={`btn btn-outline py-2 flex items-center ${copied ? 'bg-green-50 text-green-600 border-green-300' : ''}`}
              onClick={handleCopyToClipboard}
            >
              {copied ? 'Copied!' : (
                <>
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </>
              )}
            </button>
            <div className="relative group">
              <button className="btn btn-primary py-2 flex items-center">
                <Download className="h-4 w-4 mr-1" />
                Export
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 invisible group-hover:visible">
                <div className="py-1">
                  <button
                    className="w-full px-4 py-2 text-left text-sm hover:bg-slate-100 flex items-center"
                    onClick={() => handleExport('pdf')}
                    disabled={exporting}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Export as PDF
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left text-sm hover:bg-slate-100 flex items-center"
                    onClick={() => handleExport('markdown')}
                    disabled={exporting}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Export as Markdown
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Preview */}
      <div className="p-6 border-b">
        <div className="bg-slate-100 rounded-lg overflow-hidden">
          {sop.thumbnailUrl ? (
            <img 
              src={sop.thumbnailUrl} 
              alt={sop.title} 
              className="w-full h-48 md:h-64 object-cover"
            />
          ) : (
            <div className="h-48 md:h-64 flex items-center justify-center">
              <FileText className="h-16 w-16 text-slate-400" />
            </div>
          )}
        </div>
        
        {/* Video Source Link */}
        {sop.videoSource && (
          <div className="mt-3 text-sm">
            <a 
              href={sop.videoSource.startsWith('http') ? sop.videoSource : '#'} 
              className="text-red-600 hover:underline flex items-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              {sop.videoSource.startsWith('http') ? 'View original video' : 'Video file (local)'}
            </a>
          </div>
        )}
      </div>
      
      {/* Steps */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-6">Standard Operating Procedure</h3>
        
        <div className="space-y-6">
          {sop.steps.map((step, index) => (
            <div className={`border rounded-lg overflow-hidden transition-all ${expandedSteps[step.id] ? 'shadow-md' : ''}`}>
              <div 
                className={`flex items-start p-4 cursor-pointer ${expandedSteps[step.id] ? 'bg-red-50' : 'hover:bg-slate-50'}`}
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <div className="font-medium">{step.text}</div>
                  {step.timestamp > 0 && (
                    <div className="text-sm text-slate-500 mt-1">
                      Timestamp: {Math.floor(step.timestamp / 60)}:{(step.timestamp % 60).toString().padStart(2, '0')}
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0 ml-2">
                  {expandedSteps[step.id] ? (
                    <ChevronUp className="h-5 w-5 text-slate-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600" />
                  )}
                </div>
              </div>
              
              {expandedSteps[step.id] && step.imageUrl && (
                <div className="p-4 border-t">
                  <img
                    src={step.imageUrl}
                    alt={`Step ${index + 1}`}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Export Loading Indicator */}
      {exporting && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-600 mr-3"></div>
            <p className="text-red-600 font-medium">
              Exporting your SOP...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SOPViewer;