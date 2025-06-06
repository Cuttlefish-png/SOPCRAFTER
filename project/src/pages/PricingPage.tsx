import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const PricingPage: React.FC = () => {
  const { user } = useAuth();
  
  const tiers = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      price: 0,
      features: [
        '3 SOPs per month',
        'Basic export (PDF, Markdown)',
        'Video file upload (MP4)',
        'AI-powered transcription',
        'Screenshot capture',
      ],
      limitations: [
        'SOPmaker branding',
        'Basic support only',
        'No folder organization',
        'No team sharing',
      ],
      cta: 'Get Started Free',
      highlight: false,
    },
    {
      name: 'Starter',
      description: 'For individual sellers & small teams',
      price: 9,
      features: [
        '20 SOPs per month',
        'All export options',
        'Video file & URL support',
        'AI-powered transcription',
        'Screenshot capture',
        'Branding removed',
        'Email support',
      ],
      limitations: [
        'No folder organization',
        'No team sharing',
      ],
      cta: 'Start 7-Day Trial',
      highlight: true,
    },
    {
      name: 'Pro',
      description: 'For established businesses & teams',
      price: 29,
      features: [
        'Unlimited SOPs',
        'All export options',
        'Video file & URL support',
        'AI-powered transcription',
        'Screenshot capture',
        'Branding removed',
        'Priority support',
        'Folder organization',
        'Team sharing',
        'CSV/Notion sync',
      ],
      limitations: [],
      cta: 'Start 7-Day Trial',
      highlight: false,
    },
  ];
  
  return (
    <div className="pt-20 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600">
            Choose the plan that's right for your business
          </p>
        </div>
        
        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                tier.highlight ? 'border-2 border-red-500 transform md:-translate-y-2' : ''
              }`}
            >
              {tier.highlight && (
                <div className="bg-red-600 text-white py-2 text-center font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="text-slate-600 mb-4">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-slate-600">/month</span>
                </div>
                
                <Link 
                  to={user ? "/dashboard" : "/signup"} 
                  className={`block text-center py-3 px-6 rounded-lg font-semibold mb-8 ${
                    tier.highlight 
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-slate-800 hover:bg-slate-900 text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
                
                <div className="space-y-3">
                  <p className="font-semibold">Includes:</p>
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  {tier.limitations.length > 0 && (
                    <>
                      <div className="border-t border-slate-200 my-4"></div>
                      <p className="font-semibold">Limitations:</p>
                      {tier.limitations.map((limitation) => (
                        <div key={limitation} className="flex items-start">
                          <X className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{limitation}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Can I change plans later?</h3>
              <p className="text-slate-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">What happens if I exceed my monthly SOP limit?</h3>
              <p className="text-slate-600">
                You won't be able to create new SOPs until the next billing cycle or until you upgrade to a higher plan.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Do you offer refunds?</h3>
              <p className="text-slate-600">
                We offer a 7-day money-back guarantee if you're not satisfied with your purchase. Contact our support team to process your refund.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">How does the AI transcription work?</h3>
              <p className="text-slate-600">
                We use advanced AI models to transcribe your videos, identify key steps, and extract relevant screenshots automatically. The system improves over time as it learns from more examples.
              </p>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to streamline your business operations?</h2>
          <Link 
            to={user ? "/dashboard" : "/signup"}
            className="btn btn-primary inline-block"
          >
            {user ? "Go to Dashboard" : "Start Your Free Trial"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;