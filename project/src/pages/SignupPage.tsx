import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, AlertCircle, CheckCircle2 } from 'lucide-react';
import { supabase } from '../utils/supabase'; // Import supabase client
// import { useAuth } from '../contexts/AuthContext'; // We will use supabase directly here

const SignupPage: React.FC = () => {
  const [fullName, setFullName] = useState(''); // Use fullName to match profile table
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true);
    
    // Basic validation (optional, Supabase will also validate)
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError('Please fill out all fields');
      setLoading(false);
      return;
    }
    
    if (password.length < 6) { // Supabase default minimum password length is 6
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }
    
    try {
      // Call Supabase signup
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { // This 'data' object goes into new.raw_user_meta_data in the auth.users table
            full_name: fullName, // Match the column name in your 'profiles' table trigger
          },
          // redirectTo: 'http://localhost:5173/dashboard', // Optional: redirect after email confirmation
        },
      });

      if (signUpError) {
        throw signUpError; // Throw error to be caught by catch block
      }

      // Check if user and session are returned immediately (depends on email confirmation settings)
      // If email confirmation is required, data.user and data.session might be null initially.
      if (data && data.user) {
         console.log('Signup successful!', data.user);
         // Supabase automatically sets the session and AuthContext will update.
         // You might want to show a message prompting email confirmation if needed.
         navigate('/dashboard'); // Navigate after successful signup
      } else {
          // Handle cases where email confirmation is required and user/session are null
          setError('Signup successful! Please check your email to confirm your account.');
          // Optionally navigate to a confirmation pending page
          // navigate('/confirmation-pending');
      }

    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.message || 'An unexpected error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };
  
  // Password strength calculation (Keep or remove as desired)
  const getPasswordStrength = () => {
    if (!password) return 0;
    
    let strength = 0;
    if (password.length >= 6) strength += 1; // Adjusted for Supabase default
    if (password.length >= 10) strength += 1; // Slightly stronger requirement
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    return Math.min(strength, 5); // Max strength level
  };
  
  const passwordStrength = getPasswordStrength();
  
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-10 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Create your account</h1>
          <p className="text-slate-600 mt-2">
            Start creating SOPs in minutes
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
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  className="input pl-10"
                  placeholder="John Smith"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>
            
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
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
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
              
              {/* Password strength meter */}
              {password && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => ( // Adjusted for max strength 5
                      <div 
                        key={level}
                        className={`h-1.5 flex-1 rounded-full ${
                          passwordStrength >= level 
                            ? level <= 1 ? 'bg-red-400' 
                              : level <= 2 ? 'bg-orange-400'
                              : level <= 3 ? 'bg-yellow-400'
                              : level <= 4 ? 'bg-green-400' // Added level 4
                              : 'bg-green-600' // Level 5 for strong
                            : 'bg-slate-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-slate-500">Weak</p>
                    <p className="text-xs text-slate-500">Strong</p>
                  </div>
                  
                  {/* Password requirements */}
                  <div className="mt-2 space-y-1">
                     {/* Adjusted requirements for clarity */}
                    <div className="flex items-center text-xs">
                      <span className={`mr-1 ${password.length >= 6 ? 'text-green-500' : 'text-slate-400'}`}>
                        {password.length >= 6 ? <CheckCircle2 size={12} /> : '•'}
                      </span>
                      <span className={password.length >= 6 ? 'text-green-700' : 'text-slate-500'}>
                        At least 6 characters
                      </span>
                    </div>
                     <div className="flex items-center text-xs">
                      <span className={`mr-1 ${password.length >= 10 ? 'text-green-500' : 'text-slate-400'}`}>
                        {password.length >= 10 ? <CheckCircle2 size={12} /> : '•'}
                      </span>
                      <span className={password.length >= 10 ? 'text-green-700' : 'text-slate-500'}>
                        At least 10 characters (recommended)
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className={`mr-1 ${/[A-Z]/.test(password) ? 'text-green-500' : 'text-slate-400'}`}>
                        {/[A-Z]/.test(password) ? <CheckCircle2 size={12} /> : '•'}
                      </span>
                      <span className={/[A-Z]/.test(password) ? 'text-green-700' : 'text-slate-500'}>
                        At least one uppercase letter
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className={`mr-1 ${/[0-9]/.test(password) ? 'text-green-500' : 'text-slate-400'}`}>
                        {/[0-9]/.test(password) ? <CheckCircle2 size={12} /> : '•'}
                      </span>
                      <span className={/[0-9]/.test(password) ? 'text-green-700' : 'text-slate-500'}>
                        At least one number
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className={`mr-1 ${/[^A-Za-z0-9]/.test(password) ? 'text-green-500' : 'text-slate-400'}`}>
                        {/[^A-Za-z0-9]/.test(password) ? <CheckCircle2 size={12} /> : '•'}
                      </span>
                      <span className={/[^A-Za-z0-9]/.test(password) ? 'text-green-700' : 'text-slate-500'}>
                        At least one special character
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating account...
                </div>
              ) : (
                'Sign Up'
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Log in
              </Link>
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
            By signing up, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;