import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Video, Upload, Zap, FileText, 
  Megaphone, TrendingUp, ShieldCheck, Clock, CheckCircle2, Users, BarChart4, ClipboardList, Mic, Heart, Eye, Check, Sparkles 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const HomePage: React.FC = () => {
  const { user } = useAuth();
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 animate-fadeIn">
              Your AI-powered SOP platform for real results
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-fadeIn delay-200">
              Create clear, engaging Standard Operating Procedures that your team will actually want to follow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-300">
              <Link 
                to={user ? "/dashboard" : "/signup"}
                className="btn bg-red-600 text-white hover:bg-red-700 font-bold rounded-lg px-8 py-4 text-lg inline-flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                Start now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Toolkits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Toolkits for every task</h2>
              <p className="text-xl text-slate-600">Everything you need to create and manage SOPs effectively</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform animate-fadeIn">
                <div className="flex items-center mb-4">
                  <Mic className="h-8 w-8 text-red-600 mr-4" />
                  <h3 className="text-xl font-bold">Voice Recording</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li>• Record processes naturally</li>
                  <li>• Capture context and details</li>
                  <li>• Save time on documentation</li>
                </ul>
                <Link to="/features" className="text-red-600 font-semibold mt-4 inline-flex items-center">
                  Try for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform animate-fadeIn delay-200">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-8 w-8 text-red-600 mr-4" />
                  <h3 className="text-xl font-bold">AI Enhancement</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li>• Transform voice to text</li>
                  <li>• Structure content automatically</li>
                  <li>• Add visual elements</li>
                </ul>
                <Link to="/features" className="text-red-600 font-semibold mt-4 inline-flex items-center">
                  Try for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform animate-fadeIn delay-300">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-red-600 mr-4" />
                  <h3 className="text-xl font-bold">Team Collaboration</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li>• Share and edit SOPs</li>
                  <li>• Track changes and versions</li>
                  <li>• Get team feedback</li>
                </ul>
                <Link to="/features" className="text-red-600 font-semibold mt-4 inline-flex items-center">
                  Try for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by leading businesses</h2>
              <p className="text-xl text-slate-600">Join companies that trust SOPCRAFTER for their documentation needs</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {/* Add company logos here */}
              <div className="text-xl font-bold text-slate-400">Company 1</div>
              <div className="text-xl font-bold text-slate-400">Company 2</div>
              <div className="text-xl font-bold text-slate-400">Company 3</div>
              <div className="text-xl font-bold text-slate-400">Company 4</div>
              <div className="text-xl font-bold text-slate-400">Company 5</div>
              <div className="text-xl font-bold text-slate-400">Company 6</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">More data. More insights</h2>
              <p className="text-xl text-slate-600">With our AI-powered platform, imagine what you can achieve</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fadeIn">
                <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
                <p className="text-slate-600">Faster documentation</p>
              </div>
              <div className="animate-fadeIn delay-200">
                <div className="text-4xl font-bold text-red-600 mb-2">75%</div>
                <p className="text-slate-600">Better team adoption</p>
              </div>
              <div className="animate-fadeIn delay-300">
                <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
                <p className="text-slate-600">Reduced errors</p>
              </div>
              <div className="animate-fadeIn delay-400">
                <div className="text-4xl font-bold text-red-600 mb-2">85%</div>
                <p className="text-slate-600">Time saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Here's why businesses choose SOPCRAFTER</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-600 mb-6">"SOPCRAFTER has revolutionized how we document our processes. The voice-first approach makes it so much easier to capture our expertise."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold">John Smith</div>
                    <div className="text-slate-600">Operations Director, TechCorp</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <p className="text-lg text-slate-600 mb-6">"The AI enhancement feature is incredible. It transforms our voice recordings into professional documentation in minutes."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold">Sarah Johnson</div>
                    <div className="text-slate-600">Process Manager, InnovateCo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get started with SOPCRAFTER today</h2>
            <p className="text-xl text-slate-600 mb-8">
              Try our platform for 7 days. Cancel anytime.
            </p>
            <Link 
              to={user ? "/dashboard" : "/signup"}
              className="btn bg-red-600 text-white hover:bg-red-700 font-bold rounded-lg px-8 py-4 text-lg inline-flex items-center justify-center transform hover:scale-105 transition-transform"
            >
              Start your free trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;