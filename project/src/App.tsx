import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import CookiePolicy from './pages/legal/CookiePolicy';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { SOPCRAFTERProvider } from './contexts/SOPContext';

// Protected Route wrapper component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // You can render a loading spinner or a blank page while authentication status is being checked
    return <div>Loading...</div>;
  }

  if (!user) {
    // If no user is authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated, render the children (the protected page)
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <SOPCRAFTERProvider>
          <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                
                <Route 
                  path="/login" 
                  element={<AuthRedirect><LoginPage /></AuthRedirect>}
                />
                <Route 
                  path="/signup" 
                  element={<AuthRedirect><SignupPage /></AuthRedirect>}
                />
                
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  } 
                />

                {/* Legal Routes */}
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/cookies" element={<CookiePolicy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </SOPCRAFTERProvider>
      </AuthProvider>
    </Router>
  );
}

// Helper component to redirect authenticated users from auth pages
const AuthRedirect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  // While loading, render nothing or a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is authenticated, redirect away from login/signup
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // If no user, render the auth page
  return <>{children}</>;
};

export default App;