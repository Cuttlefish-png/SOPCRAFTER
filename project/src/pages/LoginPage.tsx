import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { supabase } from '../utils/supabase'; // Import supabase client
// import { useAuth } from '../contexts/AuthContext'; // We will use supabase directly here

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // const { login } = useAuth(); // Old login function
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true);
    
    // Basic validation (optional, Supabase will also validate)
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password');
      setLoading(false);
      return;
    }
    
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        throw signInError; // Throw error to be caught by catch block
      }

      // Supabase automatically sets the session on successful login.
      // The AuthContext will pick this up via the auth state change listener.
      // No need to manually set user or navigate here if AuthContext redirects based on user state.

    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'An unexpected error occurred during login.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-10 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-slate-600 mt-2">
            Log in to your SOPmaker account
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  className="input pl-10"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  className="input pl-10"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Logging in...
                </div>
              ) : (
                'Log In'
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-800">
                Sign up
              </Link>
            </p>
          </div>
          
          {/* Demo Account Section */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-center text-slate-600 mb-4">
              For demo purposes, you can log in with:
            </p>
            <div className="bg-slate-50 p-4 rounded-md text-sm">
              <p><strong>Email:</strong> demo@example.com</p>
              <p><strong>Password:</strong> any password will work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;