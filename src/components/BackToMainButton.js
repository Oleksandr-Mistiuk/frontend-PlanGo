import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonStyles.css';

function BackToMainButton() {
  const navigate = useNavigate();

  return (
    <button
      className="back-main-btn"
      onClick={() => navigate('/')}
    >
      ⬅️ Back to Mainpage
    </button>
  );
}

export default BackToMainButton;