import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageStyles.css';

function MainPage() {
  const navigate = useNavigate();

  return ( 
      <div className="container">
        <img src="/plango-logo.png" alt="PlanGo Logo" className="logo" />
        <h1 className="title">PlanGo</h1>
        <button className="btn" onClick={() => navigate('/navigation')}>
          Start
        </button>
      </div> 
  );
}

export default MainPage;