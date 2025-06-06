import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Zap, Users, Clock, CheckCircle2, 
  BarChart4, Video, Monitor, FileText, 
  ClipboardList, Scale, TrendingUp, Building2, ArrowRight
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  const { user } = useAuth();
  return (
    <div className="pt-20 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">About SOPCRAFTER</h1>
          <p className="text-xl text-slate-600">
            We're transforming how e-commerce businesses create and manage SOPs
          </p>
        </div>
        
        {/* What is an SOP Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">What is an SOP?</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-slate-600 mb-6">
                A Standard Operating Procedure (SOP) is a detailed, step-by-step guide that documents how to perform specific tasks or processes within your business. Think of it as a recipe book for your business operations - it ensures consistency, quality, and efficiency in everything you do.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <ClipboardList className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Documentation</h3>
                    <p className="text-slate-600">
                      Capture every detail of your processes, from order fulfillment to customer service responses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Scale className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Consistency</h3>
                    <p className="text-slate-600">
                      Ensure every team member follows the same high-quality standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why E-commerce Needs SOPs */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Why E-commerce Businesses Need SOPs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Scale with Confidence</h3>
                  <p className="text-slate-600">
                    As your business grows, SOPs ensure your operations remain consistent and efficient, even with new team members and increased order volume.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Building2 className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Build a Reliable Team</h3>
                  <p className="text-slate-600">
                    New team members can quickly learn and follow your processes, reducing training time and maintaining quality standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Reduce Errors</h3>
                  <p className="text-slate-600">
                    Clear procedures minimize mistakes in order processing, inventory management, and customer service.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Improve Efficiency</h3>
                  <p className="text-slate-600">
                    Streamlined processes save time and resources, allowing you to handle more orders with the same team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto">
              To help e-commerce businesses save time, reduce errors, and scale operations
              by turning video knowledge into structured documentation that anyone can follow with SOPCRAFTER.
            </p>
          </div>
        </div>
        
        {/* How It Works (Technical) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">How Our Technology Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Video className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Video Processing</h3>
              <p className="text-slate-600">
                Our system processes your uploaded videos, breaking them down into key frames and analyzing the content.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Monitor className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
              <p className="text-slate-600">
                Advanced AI models transcribe audio, identify key steps, and extract relevant screenshots automatically.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">SOP Generation</h3>
              <p className="text-slate-600">
                The system structures the information into clear, step-by-step documentation ready for your team.
              </p>
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose SOPCRAFTER?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Save 90% of Documentation Time</h3>
                  <p className="text-slate-600">
                    What used to take hours now takes minutes. Record once, and let our AI handle the rest.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Improve Process Consistency</h3>
                  <p className="text-slate-600">
                    Ensure every team member follows the exact same process, reducing errors and improving outcomes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Onboard Team Members Faster</h3>
                  <p className="text-slate-600">
                    New team members can get up to speed quickly with clear, visual SOPs created with SOPCRAFTER.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start">
                <BarChart4 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Scale Your Business</h3>
                  <p className="text-slate-600">
                    Delegate with confidence knowing your processes are clearly documented and easy to follow.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start">
                <TrendingUp className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Anyone Documenting Processes</h3>
                  <p className="text-slate-600 text-sm">If you need to document how to do something, SOPmaker makes it simple and fast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">How does the AI work?</h3>
              <p className="text-slate-600">
                Our AI system uses advanced machine learning models to transcribe audio, analyze visual content, and identify distinct steps in your process. It captures screenshots at key moments and structures everything into a coherent, step-by-step document.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Is my data secure?</h3>
              <p className="text-slate-600">
                Yes, security is our priority. All videos and generated SOPs are stored securely with encryption. We don't share your data with third parties, and you maintain complete ownership of your content.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Can I use this with my VAs?</h3>
              <p className="text-slate-600">
                Absolutely! SOPmaker is perfect for working with virtual assistants. Create SOPs once and share them with your team. The Pro plan includes team sharing features specifically designed for this use case.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">What file formats are supported?</h3>
              <p className="text-slate-600">
                We support MP4, MOV, AVI, and WEBM video formats. You can also directly link videos from Loom, YouTube, and other popular platforms without downloading them first.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">How accurate is the transcription?</h3>
              <p className="text-slate-600">
                Our transcription system achieves over 95% accuracy for clear audio in English. The system continues to improve with each update, and we're expanding language support regularly.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to transform your operations?</h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Stop leaving money on the table with inconsistent processes and empower your team.
              </p>
              <Link to={user ? "/dashboard" : "/signup"} className="btn bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 inline-flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {user ? "Go to Dashboard" : "Get Started Today"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;