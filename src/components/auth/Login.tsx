import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import '../../styles/auth/Login.scss';

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  return (
    <div className="login">
      <div className="login__overlay" onClick={onClose}></div>
      <div className="login__modal">
        <div className="login__header">
          <h2 className="login__title">Welcome Back to WAVE</h2>
          <button className="login__close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="login__content">
          <SignIn 
            routing="virtual"
            appearance={{
              elements: {
                formButtonPrimary: "login__clerk-button",
                card: "login__clerk-card",
                headerTitle: "login__clerk-title",
                headerSubtitle: "login__clerk-subtitle",
                socialButtonsBlockButton: "login__clerk-social",
                formFieldInput: "login__clerk-input",
                footerActionLink: "login__clerk-link"
              },
              layout: {
                socialButtonsPlacement: "bottom"
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;