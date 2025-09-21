import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';
import '../../styles/auth/AuthModal.scss';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialMode = 'login' 
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);

  if (!isOpen) return null;

  const handleSwitchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  return (
    <div className="auth-modal">
      {mode === 'login' ? (
        <Login onClose={onClose} />
      ) : (
        <Registration onClose={onClose} />
      )}
      
      <div className="auth-modal__switch">
        <div className="auth-modal__switch-content">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button 
                onClick={handleSwitchMode}
                className="auth-modal__switch-button"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button 
                onClick={handleSwitchMode}
                className="auth-modal__switch-button"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;