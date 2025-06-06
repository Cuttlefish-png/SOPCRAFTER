import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import VideoUploader from '../components/VideoUploader';
import SOPList from '../components/SOPList';
import SOPViewer from '../components/SOPViewer';
import { useSOPs, SOP } from '../contexts/SOPContext';

const DashboardPage: React.FC = () => {
  const { sops, processing } = useSOPs();
  const [activeTab, setActiveTab] = useState('my-sops');
  const [selectedSOP, setSelectedSOP] = useState<SOP | null>(null);
  
  return (
    <div className="pt-20 pb-10 min-h-screen bg-logo-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-slate-600">Manage your SOPs and create new ones.</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="my-sops">My SOPs</TabsTrigger>
            <TabsTrigger value="create-new">Create New</TabsTrigger>
            {selectedSOP && (
              <TabsTrigger value="view-sop">
                Viewing: {selectedSOP.title.length > 20 
                  ? `${selectedSOP.title.substring(0, 20)}...` 
                  : selectedSOP.title}
              </TabsTrigger>
            )}
          </TabsList>
          
          <TabsContent value="my-sops">
            <SOPList 
              sops={sops} 
              onSelect={(sop) => {
                setSelectedSOP(sop);
                setActiveTab('view-sop');
              }} 
            />
          </TabsContent>
          
          <TabsContent value="create-new">
            <VideoUploader processing={processing} />
          </TabsContent>
          
          <TabsContent value="view-sop">
            {selectedSOP && <SOPViewer sop={selectedSOP} />}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;