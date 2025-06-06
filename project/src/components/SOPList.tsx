import React, { useState } from 'react';
import { SOP, useSOPs } from '../contexts/SOPContext';
import { FileText, Trash2, Search, Clock } from 'lucide-react';
import { formatDistanceToNow } from '../utils/dateUtils';

interface SOPListProps {
  sops: SOP[];
  onSelect: (sop: SOP) => void;
}

const SOPList: React.FC<SOPListProps> = ({ sops, onSelect }) => {
  const { deleteSOP } = useSOPs();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter SOPs based on search term
  const filteredSOPs = sops.filter(sop => 
    sop.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Group by status
  const completedSOPs = filteredSOPs.filter(sop => sop.status === 'completed');
  const processingSOPs = filteredSOPs.filter(sop => sop.status === 'processing');
  
  return (
    <div>
      {/* Search Bar */}
      <div className="relative max-w-md mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="input pl-10"
          placeholder="Search SOPs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Processing SOPs */}
      {processingSOPs.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-red-600" />
            Processing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processingSOPs.map(sop => (
              <div 
                key={sop.id}
                className="card bg-red-50 border border-red-200"
              >
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-red-800 mb-2">{sop.title}</h4>
                  </div>
                  <div className="flex items-center text-red-600 text-sm">
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-red-600 mr-2"></div>
                    Processing...
                  </div>
                  <div className="text-xs text-slate-500 mt-2">
                    Created {formatDistanceToNow(sop.created)} ago
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Completed SOPs */}
      {completedSOPs.length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <FileText className="mr-2 h-5 w-5 text-green-600" />
            Completed SOPs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedSOPs.map(sop => (
              <div 
                key={sop.id}
                className="card border border-slate-300 hover:border-red-300 transition-all cursor-pointer"
                onClick={() => onSelect(sop)}
              >
                {sop.thumbnailUrl && (
                  <div className="h-36 overflow-hidden">
                    <img 
                      src={sop.thumbnailUrl} 
                      alt={sop.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-slate-800 mb-2">{sop.title}</h4>
                    <button 
                      className="text-slate-400 hover:text-red-500 transition-colors p-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm('Are you sure you want to delete this SOP?')) {
                          deleteSOP(sop.id);
                        }
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-slate-500 text-sm">
                    {sop.steps.length} steps
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Created {formatDistanceToNow(sop.created)} ago
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // No SOPs found
        <div className="text-center py-12">
          {filteredSOPs.length === 0 && processingSOPs.length === 0 ? (
            <>
              {searchTerm ? (
                <>
                  <p className="text-xl font-medium text-slate-700 mb-2">No SOPs match your search</p>
                  <p className="text-slate-500">Try a different search term</p>
                </>
              ) : (
                <>
                  <FileText className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-xl font-medium text-slate-700 mb-2">No SOPs yet</p>
                  <p className="text-slate-500 mb-6">
                    Upload your first video to create an SOP
                  </p>
                </>
              )}
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SOPList;