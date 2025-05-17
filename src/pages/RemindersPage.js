import React, { useState } from 'react';
import './PageStyles.css';
import AnimatedPage from '../components/AnimatedPage';
import BackButton from '../components/BackButton';

function RemindersPage({ reminders, deleteReminder }) {

  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null);

  return (
    <AnimatedPage>
      <div className="container">
        <BackButton />
        <h2 className="title">Reminders</h2>
  
        {reminders.length === 0 ? (
          <p>No reminders yet.</p>
        ) : (
          <div className="reminder-list">
  {reminders.map((reminder, index) => (
    <div key={index} className="event-card reminder-item">
    <span className="reminder-text"> {reminder}</span>
    <button
  className="delete-button"
  onClick={() => setConfirmDeleteIndex(index)}
>
  🗑️
</button>
{confirmDeleteIndex === index && (
  <div className="confirm-box">
    <p className="confirmation-text">Are you sure you want to delete this reminder?</p>
    <button
      className="btn confirm-yes"
      onClick={() => {
        deleteReminder(index);
        setConfirmDeleteIndex(null);
      }}
    >
      Yes
    </button>
    <button
      className="btn confirm-no"
      onClick={() => setConfirmDeleteIndex(null)}
    >
      No
    </button>
  </div>
)}
  </div>
  ))}
</div>
        )}
      </div>
    </AnimatedPage>
  );
}

export default RemindersPage;