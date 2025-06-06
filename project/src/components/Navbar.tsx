import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="SOPcrafter Logo" className="h-8 w-auto block object-contain" />
            <span className="text-xl font-bold text-slate-900">SOPCRAFTER</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-red-600 transition-colors ${
                location.pathname === '/' ? 'text-red-600' : 'text-slate-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/pricing" 
              className={`font-medium hover:text-red-600 transition-colors ${
                location.pathname === '/pricing' ? 'text-red-600' : 'text-slate-700'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`font-medium hover:text-red-600 transition-colors ${
                location.pathname === '/about' ? 'text-red-600' : 'text-slate-700'
              }`}
            >
              About
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="flex items-center space-x-1 text-red-600 font-medium"
                >
                  <FileText className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <button 
                  onClick={signOut}
                  className="btn btn-outline py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline py-2">Login</Link>
                <Link to="/signup" className="btn btn-primary py-2">Sign Up</Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium py-2 hover:text-red-600 transition-colors ${
                  location.pathname === '/' ? 'text-red-600' : 'text-slate-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/pricing" 
                className={`font-medium py-2 hover:text-red-600 transition-colors ${
                  location.pathname === '/pricing' ? 'text-red-600' : 'text-slate-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className={`font-medium py-2 hover:text-red-600 transition-colors ${
                  location.pathname === '/about' ? 'text-red-600' : 'text-slate-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {user ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="flex items-center space-x-1 text-red-600 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <FileText className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                  <button 
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    className="btn btn-outline w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="btn btn-outline w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="btn btn-primary w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;