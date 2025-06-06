import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Video, Upload, Zap, FileText, 
  ShoppingCart, Store, Package, Megaphone, TrendingUp, ShieldCheck, Clock, CheckCircle2, Users, BarChart4, ClipboardList 
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
      <section className="pt-40 pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* <div className="inline-flex items-center bg-red-50 rounded-full px-3 py-1 mb-6">
              <Video className="h-4 w-4 text-red-600 mr-2" />
              <span className="text-sm text-red-700">Free Beta Access</span>
            </div> */}
            
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 animate-slideUp">
              Turn Videos into <span className="text-red-600">SOPs</span><br className="hidden md:inline" />
              for your business
            </h1>
            
            {/* <h2 className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              A Standard Operating Procedure (SOP) is a detailed, written set of step-by-step instructions that describes how to perform a routine business activity. SOPmaker helps e-commerce brands scale efficiently by turning videos into structured SOPs for:
            </h2> */}
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slideUp stagger-delay-1">
              Stop writing lengthy, tedious instructions. SOPCRAFTER simplifies creating detailed Standard Operating Procedures from your existing process videos, so you can train faster, reduce errors, and scale your e-commerce business with ease.
            </p>
            
            {/* Simplified Feature Grid in Hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 animate-slideUp stagger-delay-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="mb-3 flex items-center">
                  <TrendingUp className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="font-semibold text-lg text-slate-800">Scaling Operations</h3>
                </div>
                <p className="text-slate-600 text-sm">Train new team members consistently and maintain quality as you grow.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 animate-slideUp stagger-delay-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="mb-3 flex items-center">
                  <ShieldCheck className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="font-semibold text-lg text-slate-800">Reducing Errors</h3>
                </div>
                <p className="text-slate-600 text-sm">Ensure critical tasks like product listings and fulfillment follow exact steps.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 animate-slideUp stagger-delay-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="mb-3 flex items-center">
                  <Clock className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="font-semibold text-lg text-slate-800">Saving Time</h3>
                </div>
                <p className="text-slate-600 text-sm">Delegate confidently to VAs and team members with clear documentation.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slideUp stagger-delay-5">
              <Link 
                to={user ? "/dashboard" : "/signup"} 
                className="btn bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center whitespace-nowrap"
              >
                {user ? "Go to Dashboard" : "Try it Free"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button 
                onClick={scrollToHowItWorks}
                className="btn bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-lg px-8 py-4"
              >
                How It Works
              </button>
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

      {/* E-commerce Showcase */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powering E-commerce Success</h2>
              <p className="text-xl text-slate-600">Join successful businesses scaling their operations with SOPCRAFTER</p>
            </div>

            {/* Platform Types */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
                <ShoppingCart className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-800">Marketplace Sellers</h3>
                <p className="text-sm text-slate-600 mt-2">Amazon, eBay, Etsy</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
                <Store className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-800">Shop Owners</h3>
                <p className="text-sm text-slate-600 mt-2">Shopify, WooCommerce</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
                <Package className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-800">Dropshippers</h3>
                <p className="text-sm text-slate-600 mt-2">Multi-platform</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
                <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-semibold text-slate-800">Growing Brands</h3>
                <p className="text-sm text-slate-600 mt-2">All platforms</p>
              </div>
            </div>

            {/* Growth Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
                <p className="text-slate-600">Faster SOP Creation</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">75%</div>
                <p className="text-slate-600">Reduction in Training Time</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
                <p className="text-slate-600">Fewer Process Errors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual SOPs Section */}
      <section className="py-32 bg-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeIn">
              {/* Visual SOP example image */}
              <div className="bg-white rounded-xl shadow-xl p-4 border border-slate-200">
                <img 
                  src="/SOPExample.png" 
                  alt="Example of a generated SOP" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="animate-slideUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">See Your Processes Come to Life</h2>
              <p className="text-xl text-slate-700 mb-8">
                SOPCRAFTER doesn't just generate text instructions; it captures key moments from your videos to create visually rich, easy-to-follow guides.
              </p>

              <div className="space-y-6">
                <div className="flex items-start animate-slideUp stagger-delay-1">
                   <FileText className="h-7 w-7 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800">Clear Screenshots</h3>
                    <p className="text-slate-600 text-sm">Automatically capture images at each critical step of your process.</p>
                  </div>
                </div>
                 <div className="flex items-start animate-slideUp stagger-delay-2">
                  <Video className="h-7 w-7 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800">Video-Based Steps</h3>
                    <p className="text-slate-600 text-sm">Each step is directly linked to the relevant part of your original video.</p>
                  </div>
                </div>
                 <div className="flex items-start animate-slideUp stagger-delay-3">
                  <CheckCircle2 className="h-7 w-7 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800">Easy to Follow</h3>
                    <p className="text-slate-600 text-sm">Visually guided SOPs make training and execution simple and accurate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Advanced AI */}
      <section className="py-32 bg-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by Advanced AI</h2>
            <p className="text-xl text-slate-700 mb-12 max-w-3xl mx-auto">
              Our intelligent system simplifies SOP creation by automatically understanding your video content.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start animate-slideUp stagger-delay-1">
                <Zap className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Intelligent Video Analysis</h3>
                  <p className="text-slate-600 text-sm">Our AI processes your videos to identify key actions and moments relevant to your SOPs.</p>
                </div>
              </div>
              <div className="flex items-start animate-slideUp stagger-delay-2">
                <FileText className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Automated Step & Screenshot Capture</h3>
                  <p className="text-slate-600 text-sm">Automatically extracts step-by-step instructions and relevant screenshots from your video content.</p>
                </div>
              </div>
               <div className="flex items-start animate-slideUp stagger-delay-3">
                <ClipboardList className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Structured & Editable Output</h3>
                  <p className="text-slate-600 text-sm">Generates a well-organized SOP draft that you can easily review and customize.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Create Your SOPs in Minutes</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transform your process videos into professional, shareable SOPs in three simple steps with our intuitive platform and powerful AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-8 flex flex-col items-center text-center animate-slideUp stagger-delay-1 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Upload className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">1. Record & Upload Video</h3>
              <p className="text-slate-600 text-sm">
                Use any screen recorder or camera to capture your process. Upload the video file directly or paste a link from platforms like Loom or YouTube.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-8 flex flex-col items-center text-center animate-slideUp stagger-delay-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">2. AI Processes & Drafts</h3>
              <p className="text-slate-600 text-sm">
                Our advanced AI analyzes your video, transcribes audio, identifies key actions, captures screenshots, and generates a structured SOP draft automatically.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-8 flex flex-col items-center text-center animate-slideUp stagger-delay-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">3. Review, Edit & Share</h3>
              <p className="text-slate-600 text-sm">
                Review the AI-generated SOP, make quick edits if needed, and then easily share it with your team or export it in various formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SOPCRAFTER?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the difference SOPCRAFTER makes for your e-commerce operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-6 animate-slideUp stagger-delay-1 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 text-red-600">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Save Valuable Time</h3>
              <p className="text-slate-600 text-sm">
                Quickly create SOPs from videos, freeing up hours previously spent on manual documentation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-6 animate-slideUp stagger-delay-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 text-red-600">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Improve Team Efficiency</h3>
              <p className="text-slate-600 text-sm">
                Ensure consistent processes and faster onboarding for new team members with clear, visual guides.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-6 animate-slideUp stagger-delay-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 text-red-600">
                <BarChart4 className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Boost Productivity</h3>
              <p className="text-slate-600 text-sm">
                Streamline workflows and reduce errors with easily accessible and understandable SOPs using SOPCRAFTER.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ideal For...</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              SOPCRAFTER is designed to empower various roles within an e-commerce business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-6 flex items-start animate-slideUp stagger-delay-1">
              <Users className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">E-commerce Business Owners</h3>
                <p className="text-slate-600 text-sm">Systemize your operations and free up your time to focus on growth and strategy.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-6 flex items-start animate-slideUp stagger-delay-2">
              <ShieldCheck className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Operations Managers</h3>
                <p className="text-slate-600 text-sm">Ensure consistency and efficiency across all tasks and train your team effectively.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-6 flex items-start animate-slideUp stagger-delay-3">
              <FileText className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Virtual Assistants & Teams</h3>
                <p className="text-slate-600 text-sm">Easily follow clear, visual SOPs to perform tasks accurately and independently.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-6 flex items-start animate-slideUp stagger-delay-4">
              <TrendingUp className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">Anyone Documenting Processes</h3>
                <p className="text-slate-600 text-sm">If you need to document how to do something, SOPCRAFTER makes it simple and fast.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streamline Your E-commerce Workflows */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:grid-cols-[1fr,1.5fr]">
            <div className="animate-slideUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamline Your E-commerce Workflows</h2>
              <p className="text-xl text-slate-600 mb-8">
                From product listing to customer support, SOPCRAFTER helps you standardize every key process.
              </p>

              <div className="space-y-6">
                <div className="flex items-start animate-slideUp stagger-delay-1 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <ShoppingCart className="h-7 w-7 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800">Product Listing</h3>
                    <p className="text-slate-600 text-sm">Create consistent, high-quality product listings across all platforms.</p>
                  </div>
                </div>
                 <div className="flex items-start animate-slideUp stagger-delay-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Package className="h-7 w-7 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800">Order Fulfillment</h3>
                    <p className="text-slate-600 text-sm">Ensure accurate and timely processing of every order.</p>
                  </div>
                </div>
                 <div className="flex items-start animate-slideUp stagger-delay-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Store className="h-7 w-7 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-slate-800">Customer Service</h3>
                    <p className="text-slate-600 text-sm">Provide consistent, helpful support with standardized procedures.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fadeIn">
              {/* Workflow illustration */}
              <div className="bg-white rounded-xl shadow-xl p-2 border border-slate-300">
                <img 
                  src="/workflow-ex.png" 
                  alt="E-commerce workflow illustration" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Pricing Overview */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find the perfect plan to fit your e-commerce business needs.
            </p>
          </div>

          {/* Basic Pricing Cards (Example) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-6 text-center animate-slideUp stagger-delay-1">
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Starter</h3>
              <p className="text-slate-600 mb-4">For growing businesses</p>
              <div className="text-4xl font-bold text-red-600 mb-6">$9<span className="text-xl text-slate-600">/month</span></div>
              <Link to="/pricing" className="btn bg-red-600 hover:bg-red-700 text-white w-full text-lg py-3">
                See Details
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-300 p-6 text-center animate-slideUp stagger-delay-2">
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Pro</h3>
              <p className="text-slate-600 mb-4">For established teams</p>
              <div className="text-4xl font-bold text-red-600 mb-6">$29<span className="text-xl text-slate-600">/month</span></div>
               <Link to="/pricing" className="btn bg-red-600 hover:bg-red-700 text-white w-full text-lg py-3">
                See Details
              </Link>
            </div>
          </div>

           <div className="text-center mt-12 animate-slideUp stagger-delay-3">
             <Link to="/pricing" className="text-red-600 hover:underline font-medium">
               View All Pricing Options <ArrowRight className="ml-1 h-4 w-4 inline" />
             </Link>
           </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For E-commerce</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Create SOPs for every aspect of your online business
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 animate-slideUp stagger-delay-1 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 text-red-600">
                <ShoppingCart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Product Listings</h3>
              <p className="text-slate-600">
                Create detailed SOPs for consistent product uploads across all platforms
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 animate-slideUp stagger-delay-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 text-red-600">
                <Store className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Store Management</h3>
              <p className="text-slate-600">
                Document inventory, fulfillment, and customer service processes
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 animate-slideUp stagger-delay-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 text-red-600">
                <Megaphone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Marketing Tasks</h3>
              <p className="text-slate-600">
                Standardize your ad setup and social media management workflows
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 animate-slideUp stagger-delay-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 text-red-600">
                <Package className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Shipping & Returns</h3>
              <p className="text-slate-600">
                Create clear processes for order fulfillment and handling returns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-red-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Operations?</h2>
          <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
            Join hundreds of e-commerce businesses creating professional SOPs in minutes, not hours.
          </p>
          <Link 
            to={user ? "/dashboard" : "/signup"}
            className="btn bg-white text-red-600 hover:bg-red-50 font-bold rounded-lg px-8 py-4 text-lg inline-flex items-center"
          >
            {user ? "Go to Dashboard" : "Create Your First SOP"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;