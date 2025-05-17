import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css'; // не забудь створити або замінити на свій файл стилів

function BackButton({ showBack = true, showNav = true, showMain = true }) {
  const navigate = useNavigate();

  return (
    <div className="back-container">
      {showBack && (
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      )}
      {showNav && (
        <button className="back-btn nav" onClick={() => navigate('/navigation')}>
          Back to Navigation
        </button>
      )}
      {showMain && (
        <button className="back-btn main" onClick={() => navigate('/')}>
          Back to Mainpage
        </button>
      )}
    </div>
  );
}

export default BackButton;