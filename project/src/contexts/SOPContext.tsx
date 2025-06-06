import React, { createContext, useState, useContext } from 'react';

// Types
export interface SOP {
  id: string;
  title: string;
  status: 'processing' | 'completed' | 'failed';
  created: Date;
  steps: SOPStep[];
  videoSource: string;
  thumbnailUrl?: string;
}

export interface SOPStep {
  id: string;
  text: string;
  imageUrl?: string;
  timestamp: number;
}

interface SOPContextType {
  sops: SOP[];
  processing: boolean;
  uploadVideo: (file: File, title: string) => Promise<void>;
  uploadVideoFromUrl: (url: string, title: string) => Promise<void>;
  getSOP: (id: string) => SOP | undefined;
  deleteSOP: (id: string) => void;
  exportSOP: (id: string, format: 'pdf' | 'markdown') => Promise<string>;
}

// Create context
const SOPCRAFTERContext = createContext<SOPContextType | undefined>(undefined);

// Mock data
const MOCK_SOPS: SOP[] = [
  {
    id: '1',
    title: 'Shopify Product Listing',
    status: 'completed',
    created: new Date(Date.now() - 86400000), // 1 day ago
    videoSource: 'shopify-demo.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    steps: [
      {
        id: '1-1',
        text: 'Log in to your Shopify admin panel',
        imageUrl: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        timestamp: 0
      },
      {
        id: '1-2',
        text: 'Navigate to Products > Add Product',
        imageUrl: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        timestamp: 15
      },
      {
        id: '1-3',
        text: 'Fill in the product details: title, description and price',
        imageUrl: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        timestamp: 30
      }
    ]
  },
  {
    id: '2',
    title: 'Amazon FBA Setup',
    status: 'completed',
    created: new Date(Date.now() - 172800000), // 2 days ago
    videoSource: 'amazon-fba.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    steps: [
      {
        id: '2-1',
        text: 'Create an Amazon Seller account',
        imageUrl: 'https://images.pexels.com/photos/4968631/pexels-photo-4968631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        timestamp: 0
      },
      {
        id: '2-2',
        text: 'Set up your FBA preferences',
        imageUrl: 'https://images.pexels.com/photos/4968631/pexels-photo-4968631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        timestamp: 45
      }
    ]
  }
];

// Provider component
export const SOPCRAFTERProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sops, setSops] = useState<SOP[]>(MOCK_SOPS);
  const [processing, setProcessing] = useState(false);

  const uploadVideo = async (file: File, title: string) => {
    setProcessing(true);
    
    // Mock upload and processing
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const newSOP: SOP = {
          id: Date.now().toString(),
          title,
          status: 'processing',
          created: new Date(),
          videoSource: URL.createObjectURL(file),
          steps: []
        };
        
        setSops((prev) => [newSOP, ...prev]);
        
        // Simulate AI processing completion after some time
        setTimeout(() => {
          setSops((prev) => 
            prev.map(sop => 
              sop.id === newSOP.id 
                ? {
                    ...sop,
                    status: 'completed',
                    thumbnailUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    steps: [
                      {
                        id: `${newSOP.id}-1`,
                        text: 'First step automatically detected',
                        imageUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        timestamp: 0
                      },
                      {
                        id: `${newSOP.id}-2`,
                        text: 'Second step with explanation',
                        imageUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        timestamp: 30
                      },
                      {
                        id: `${newSOP.id}-3`,
                        text: 'Final steps and completion',
                        imageUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        timestamp: 60
                      }
                    ]
                  } 
                : sop
            )
          );
          setProcessing(false);
        }, 5000);
        
        resolve();
      }, 1500);
    });
  };

  const uploadVideoFromUrl = async (url: string, title: string) => {
    setProcessing(true);
    
    // Mock URL upload and processing
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const newSOP: SOP = {
          id: Date.now().toString(),
          title,
          status: 'processing',
          created: new Date(),
          videoSource: url,
          steps: []
        };
        
        setSops((prev) => [newSOP, ...prev]);
        
        // Simulate AI processing completion after some time
        setTimeout(() => {
          setSops((prev) => 
            prev.map(sop => 
              sop.id === newSOP.id 
                ? {
                    ...sop,
                    status: 'completed',
                    thumbnailUrl: 'https://images.pexels.com/photos/8192062/pexels-photo-8192062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    steps: [
                      {
                        id: `${newSOP.id}-1`,
                        text: 'First step detected from video URL',
                        imageUrl: 'https://images.pexels.com/photos/8192062/pexels-photo-8192062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        timestamp: 0
                      },
                      {
                        id: `${newSOP.id}-2`,
                        text: 'Second step explanation from URL video',
                        imageUrl: 'https://images.pexels.com/photos/8192062/pexels-photo-8192062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        timestamp: 25
                      }
                    ]
                  } 
                : sop
            )
          );
          setProcessing(false);
        }, 6000);
        
        resolve();
      }, 1000);
    });
  };

  const getSOP = (id: string) => {
    return sops.find(sop => sop.id === id);
  };

  const deleteSOP = (id: string) => {
    setSops(sops.filter(sop => sop.id !== id));
  };

  const exportSOP = async (id: string, format: 'pdf' | 'markdown') => {
    // Mock export function
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`/exports/sop-${id}.${format === 'pdf' ? 'pdf' : 'md'}`);
      }, 1000);
    });
  };

  return (
    <SOPCRAFTERContext.Provider 
      value={{ 
        sops, 
        processing,
        uploadVideo, 
        uploadVideoFromUrl,
        getSOP,
        deleteSOP,
        exportSOP
      }}
    >
      {children}
    </SOPCRAFTERContext.Provider>
  );
};

// Custom hook to use the SOP context
export const useSOPs = () => {
  const context = useContext(SOPCRAFTERContext);
  if (context === undefined) {
    throw new Error('useSOPs must be used within a SOPCRAFTERProvider');
  }
  return context;
};