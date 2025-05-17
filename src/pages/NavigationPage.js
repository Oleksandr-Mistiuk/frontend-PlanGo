import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import BackButton from '../components/BackButton';
import './PageStyles.css';

function NavigationPage() {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <div className="container">
        <BackButton />
        <h2 className="title">What would you like to do?</h2>

        <div className="button-group">
          <button className="btn" onClick={() => navigate('/create-event')}>
            📅 Create Event
          </button>
          <button className="btn" onClick={() => navigate('/dashboard')}>
            📋 My Dashboard
          </button>
          <button className="btn" onClick={() => navigate('/reminders')}>
            🔔 Reminders
          </button>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default NavigationPage;