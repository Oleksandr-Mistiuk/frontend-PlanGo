import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import BackButton from '../components/BackButton';
import './PageStyles.css';

function CreateEventPage({ addReminder }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !time || !location || !description) {
      alert('Please fill in all fields');
      return;
    }

    const newEvent = { title, date, time, location, description };

    const storedEvents = localStorage.getItem('events');
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];

    parsedEvents.push(newEvent);
    localStorage.setItem('events', JSON.stringify(parsedEvents));

    navigate('/dashboard');
  };

  const handleRemind = () => {
    if (!title || !date || !time) {
      alert('Please fill in at least name, date and time');
      return;
    }

    const text = `${title} on ${date} at ${time}`;
    addReminder(`🔔 ${text}`);
    alert('Reminder added!');
  };

  return (
    <AnimatedPage>
      <div className="container">
        <BackButton />
        <h2 className="title">Create Event</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Event name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          />
          <button type="button" className="btn" onClick={handleRemind}>
            Remind It
          </button>
          <button type="submit" className="btn">+ Create</button>
        </form>
      </div>
    </AnimatedPage>
  );
}

export default CreateEventPage;