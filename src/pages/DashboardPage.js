import React, { useState, useEffect } from 'react';
import './PageStyles.css';
import AnimatedPage from '../components/AnimatedPage';
import BackButton from '../components/BackButton';

function DashboardPage() {
  const [events, setEvents] = useState([]);
  const [confirmIndex, setConfirmIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('events');
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedEvents = events.filter((_, i) => i !== indexToDelete);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEvents(updatedEvents); 
  };

  return (
    <AnimatedPage>
      <div className="container">
        <BackButton />
        <h2 className="title">My Dashboard</h2>

        {events.length === 0 ? (
          <p>No events yet.</p>
        ) : (
          <ul className="event-list">
            {events.map((event, index) => (
              <li key={index} className="event-card">
                <div className="event-content">
                  <div>
                    <h3>{event.title}</h3>
                    <div><strong>📅 Date:</strong> {event.date}</div>
                    <div><strong>⏰ Time:</strong> {event.time}</div>
                    <div><strong>📍 Location:</strong> {event.location}</div>
                    <div><strong>📝 Description:</strong> {event.description}</div>
                  </div>
                  <button
                    className="delete-event-btn"
                    onClick={() => setConfirmIndex(index)}
                  >
                    🗑️
                  </button>
                </div>

                {confirmIndex === index && (
                  <div className="confirm-box">
                    <p>Are you sure you want to delete this event?</p>
                    <div className="confirm-buttons">
                      <button className="btn confirm-yes" onClick={() => handleDelete(index)}>
                        Yes
                      </button>
                      <button className="btn confirm-no red" onClick={() => setConfirmIndex(null)}>No</button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </AnimatedPage>
  );
}

export default DashboardPage;
