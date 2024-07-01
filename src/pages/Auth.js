import React from 'react';
import Auth from '../components/Auth';

const AuthPage = () => {
  const handleAuth = (email, password, isSignUp = false) => {
    // Handle authentication
  };

  return (
    <div className="auth-page">
      <Auth onAuth={handleAuth} />
    </div>
  );
};

export default AuthPage;
