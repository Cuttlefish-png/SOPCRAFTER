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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-red-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 animate-fadeIn">
              Transform Your Business Processes with Voice-First SOPs
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-fadeIn delay-200">
              Create clear, engaging Standard Operating Procedures that your team will actually want to follow.
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
                to="/about"
                className="btn bg-white text-slate-900 hover:bg-slate-50 font-bold rounded-lg px-8 py-4 text-lg inline-flex items-center justify-center border border-slate-200 transform hover:scale-105 transition-transform"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Basic Documentation</h2>
              <p className="text-xl text-slate-600">We capture not just what you do, but why it matters</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform animate-fadeIn">
                <Mic className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Voice-First Approach</h3>
                <p className="text-slate-600">Start with your natural explanation, then we'll enhance it with visual steps.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform animate-fadeIn delay-200">
                <Heart className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Context-Rich Content</h3>
                <p className="text-slate-600">Capture the importance and context behind each step of your process.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform animate-fadeIn delay-300">
                <Eye className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Screen Capture</h3>
                <p className="text-slate-600">Intelligently captures the most relevant parts of your screen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SOPCRAFTER?</h2>
              <p className="text-xl text-slate-600">We're not just another documentation tool</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-4">Dynamic, AI-Formatted Outputs</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                    <span>Intelligent formatting that adapts to your content</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                    <span>Clear, hierarchical structure that's easy to follow</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                    <span>Professional formatting that impresses stakeholders</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 animate-fadeIn delay-200">
                <h3 className="text-2xl font-bold mb-4">Explanations That Create Connection</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                    <span>Context-rich explanations that build understanding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                    <span>Engaging content that resonates with your team</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                    <span>Stories and examples that make procedures memorable</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Unlike Traditional Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 animate-fadeIn">
                  <h4 className="font-bold mb-2">Basic Documentation</h4>
                  <p className="text-slate-600">Just text and screenshots</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 animate-fadeIn delay-200">
                  <h4 className="font-bold mb-2">Static Templates</h4>
                  <p className="text-slate-600">Rigid, one-size-fits-all formats</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 animate-fadeIn delay-300">
                  <h4 className="font-bold mb-2">Manual Updates</h4>
                  <p className="text-slate-600">Time-consuming to maintain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem and Solution Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tired of Writing SOPs Manually?</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Traditional SOP creation is slow, tedious, and often results in outdated or unused documentation. SOPCRAFTER changes that.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="animate-slideUp stagger-delay-1">
                <div className="flex items-center mb-4">
                  <Video className="h-8 w-8 text-red-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800">From Video to SOP, Instantly</h3>
                    <p className="text-slate-600 text-sm">Simply record your process, upload the video, and our AI does the heavy lifting.</p>
                  </div>
                </div>
              </div>
              <div className="animate-slideUp stagger-delay-2">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-red-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800">Clear, Step-by-Step Documentation</h3>
                    <p className="text-slate-600 text-sm">Get a structured SOP with text instructions and screenshots derived directly from your video.</p>
                  </div>
                </div>
              </div>
               <div className="animate-slideUp stagger-delay-3">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-red-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800">Save Time and Resources</h3>
                    <p className="text-slate-600 text-sm">Reduce documentation time by up to 90%, freeing up your team to focus on growth.</p>
                  </div>
                </div>
              </div>
               <div className="animate-slideUp stagger-delay-4">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-red-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800">Empower Your Team</h3>
                    <p className="text-slate-600 text-sm">Provide your team with easy-to-follow guides for consistent performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Success Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powering Business Success</h2>
              <p className="text-xl text-slate-600">Join successful businesses scaling their operations with SOPCRAFTER</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform animate-fadeIn">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-800">Growing Teams</h3>
                <p className="text-sm text-slate-600 mt-2">Scale your operations efficiently</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform animate-fadeIn delay-200">
                <BarChart4 className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-800">Process Optimization</h3>
                <p className="text-sm text-slate-600 mt-2">Streamline your workflows</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform animate-fadeIn delay-300">
                <ShieldCheck className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-800">Quality Assurance</h3>
                <p className="text-sm text-slate-600 mt-2">Maintain consistent standards</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform animate-fadeIn delay-400">
                <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-800">Business Growth</h3>
                <p className="text-sm text-slate-600 mt-2">Scale with confidence</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center transform hover:scale-105 transition-transform animate-fadeIn">
                <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
                <p className="text-slate-600">Faster SOP Creation</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center transform hover:scale-105 transition-transform animate-fadeIn delay-200">
                <div className="text-4xl font-bold text-red-600 mb-2">75%</div>
                <p className="text-slate-600">Reduction in Training Time</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center transform hover:scale-105 transition-transform animate-fadeIn delay-300">
                <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
                <p className="text-slate-600">Fewer Process Errors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streamline Workflows Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fadeIn">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamline Your Workflows</h2>
                <p className="text-xl text-slate-600 mb-8">
                  Create, manage, and share SOPs effortlessly with our intuitive platform. From voice recording to final documentation, we've got you covered.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 animate-slideInLeft">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Mic className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Voice-First Recording</h3>
                      <p className="text-slate-600">Record your processes naturally through voice, making documentation feel like a conversation.</p>
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
                <div className="w-full h-auto max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                  <img 
                    src="/workflow-ex.png" 
                    alt="Workflow illustration"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Growth */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For Growth</h2>
              <p className="text-xl text-slate-600">Backed by data: How SOPs drive business success</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 transform hover:scale-105 transition-transform animate-fadeIn">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Faster Onboarding</h3>
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
                to="/about"
                className="btn bg-white text-slate-900 hover:bg-slate-50 font-bold rounded-lg px-8 py-4 text-lg inline-flex items-center justify-center border border-slate-200 transform hover:scale-105 transition-transform"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;