import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import '../../styles/auth/Registration.scss';

interface RegistrationProps {
  onClose: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ onClose }) => {
  return (
    <div className="registration">
      <div className="registration__overlay" onClick={onClose}></div>
      <div className="registration__modal">
        <div className="registration__header">
          <h2 className="registration__title">Join WAVE Platform</h2>
          <button className="registration__close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="registration__content">
          <p className="registration__subtitle">
            Create your account to access real-time ocean disaster monitoring and alerts.
          </p>
          
          <SignUp 
            routing="virtual"
            appearance={{
              elements: {
                formButtonPrimary: "registration__clerk-button",
                card: "registration__clerk-card",
                headerTitle: "registration__clerk-title",
                headerSubtitle: "registration__clerk-subtitle",
                socialButtonsBlockButton: "registration__clerk-social",
                formFieldInput: "registration__clerk-input",
                footerActionLink: "registration__clerk-link"
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

export default Registration;