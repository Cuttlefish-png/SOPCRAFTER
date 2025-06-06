import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Video, Upload, Zap, FileText, 
  Megaphone, TrendingUp, ShieldCheck, Clock, CheckCircle2, Users, BarChart4, ClipboardList, Mic, Heart, Eye, Check, Sparkles
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AboutPage: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 animate-fadeIn">
              About SOPCRAFTER
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-fadeIn delay-200">
              We're revolutionizing how businesses document and share their processes.
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
              <div className="space-y-8 animate-fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-slate-600 mb-8">
                  We're on a mission to revolutionize how businesses document and share their processes. By combining the power of voice with AI, we're making it easier than ever to create clear, engaging SOPs that your team will actually use.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 animate-slideInLeft">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Mic className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Voice-First Approach</h3>
                      <p className="text-slate-600">Capture your expertise naturally through voice, making documentation feel like a conversation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 animate-slideInLeft delay-200">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">AI-Powered Enhancement</h3>
                      <p className="text-slate-600">Our AI transforms your voice into professional, structured documentation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 animate-slideInLeft delay-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                      <p className="text-slate-600">Enable your team to contribute and improve processes together.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative animate-fadeIn">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                  <img 
                    src="/images/mission-illustration.svg" 
                    alt="Our mission illustration"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-100 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-100 rounded-full opacity-50 animate-pulse delay-1000"></div>
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
              <p className="text-xl text-slate-600">The impact of well-documented processes on business success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform animate-fadeIn">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Team Efficiency</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <span>70% reduction in training time</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <span>85% faster time to productivity</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <span>90% better knowledge retention</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform animate-fadeIn delay-200">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart4 className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Process Optimization</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <span>65% fewer process errors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <span>40% increase in efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <span>50% reduction in rework</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform animate-fadeIn delay-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Growth</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <span>3x faster scaling capability</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <span>75% better process consistency</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                    <span>60% higher team productivity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-600 mb-8 animate-fadeIn delay-200">
              Join hundreds of businesses creating professional SOPs in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-300">
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
  );
};

export default AboutPage;