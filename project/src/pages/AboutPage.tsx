import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Zap, Users, Clock, CheckCircle2, 
  BarChart4, Video, Monitor, FileText, 
  ClipboardList, Scale, TrendingUp, Building2, ArrowRight, Check, Mic, Heart
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  const { user } = useAuth();
  return (
    <div className="pt-20 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-50 to-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 animate-fadeIn">
                About SOPCRAFTER
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-fadeIn delay-200">
                We're transforming how businesses create and manage SOPs, making documentation engaging and effective.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Mission Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-xl text-slate-600 mb-8">
                    To help businesses save time, reduce errors, and scale operations through engaging, voice-first documentation.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <Mic className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Voice-First Documentation</h3>
                        <p className="text-slate-600">Start with your natural explanation, then we'll enhance it with visual steps.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Emotion-Rich Content</h3>
                        <p className="text-slate-600">Capture the passion and context behind each step of your process.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Business Growth</h3>
                        <p className="text-slate-600">Scale your operations with confidence through clear, engaging documentation.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                    <img 
                      src="/images/about-illustration.svg" 
                      alt="About SOPCRAFTER illustration"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-100 rounded-full opacity-50"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-100 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Businesses Need SOPs */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Need SOPs</h2>
                <p className="text-xl text-slate-600">Clear documentation is the foundation of scalable operations</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Team Onboarding</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Faster training process</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Consistent knowledge transfer</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Reduced learning curve</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Quality Control</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Consistent output</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Reduced errors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Better compliance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Business Growth</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Scalable operations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Efficient processes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <span>Confident expansion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
                <p className="text-xl text-slate-600">Passionate about transforming how businesses document their processes</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-center mb-2">John Doe</h3>
                  <p className="text-slate-600 text-center mb-4">CEO & Founder</p>
                  <p className="text-slate-600 text-center">20+ years of experience in business process optimization</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-center mb-2">Jane Smith</h3>
                  <p className="text-slate-600 text-center mb-4">CTO</p>
                  <p className="text-slate-600 text-center">Expert in AI and machine learning technologies</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-center mb-2">Mike Johnson</h3>
                  <p className="text-slate-600 text-center mb-4">Head of Product</p>
                  <p className="text-slate-600 text-center">Specialized in user experience and product design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-b from-white to-red-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Join hundreds of businesses creating professional SOPs in minutes, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to={user ? "/dashboard" : "/signup"}
                  className="btn bg-red-600 text-white hover:bg-red-700 font-bold rounded-lg px-8 py-4 text-lg inline-flex items-center justify-center transform hover:scale-105 transition-transform"
                >
                  {user ? "Go to Dashboard" : "Start Creating SOPs"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/contact"
                  className="btn bg-white text-slate-900 hover:bg-slate-50 font-bold rounded-lg px-8 py-4 text-lg inline-flex items-center justify-center border border-slate-200 transform hover:scale-105 transition-transform"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;