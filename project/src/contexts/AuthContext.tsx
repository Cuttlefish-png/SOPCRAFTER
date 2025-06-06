import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  // Add login and signup functions if you want to expose them via context
  // login: (email: string, password: string) => Promise<{ data: { user: User | null, session: Session | null }, error: any | null }>;
  // signup: (email: string, password: string, options?: { data?: object }) => Promise<{ data: { user: User | null, session: Session | null }, error: any | null }>;
  signOut: () => Promise<{ error: any | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch session and user
    const getActiveSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error getting session:', error);
        setUser(null);
      } else {
        setUser(session?.user ?? null);
      }
      setLoading(false);
    };

    getActiveSession();

    // Listen for changes on auth state (sign in, sign out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      // You might want to setLoading(false) here too depending on _event, 
      // but getSession on mount handles initial loading.
    });

    // Cleanup subscription on component unmount
    return () => subscription.unsubscribe();
  }, []); // Empty dependency array means this effect runs only once on mount

  // You could potentially expose login/signup here if needed
  // const login = async (email, password) => { ... call supabase.auth.signInWithPassword ... };
  // const signup = async (email, password, options) => { ... call supabase.auth.signUp ... };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    }
    return { error };
  };

  const value = {
    user,
    loading,
    signOut,
    // include login, signup if added above
  };

  // Optionally, render a loading state while checking the session
  // if (loading) {
  //   return <div>Loading authentication...</div>; 
  // }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};