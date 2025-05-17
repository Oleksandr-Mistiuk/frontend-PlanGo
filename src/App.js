import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NavigationPage from './pages/NavigationPage';
import CreateEventPage from './pages/CreateEventPage';
import DashboardPage from './pages/DashboardPage';
import RemindersPage from './pages/RemindersPage';

function App() {
  const [events, setEvents] = useState([]);
  const [reminders, setReminders] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  const deleteReminder = (indexToDelete) => {
    setReminders((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/navigation" element={<NavigationPage />} />
        <Route
  path="/create-event"
  element={
    <CreateEventPage
      addEvent={addEvent}
      addReminder={addReminder} // ← ЦЕ ГОЛОВНЕ
    />
  }
/>
        <Route path="/dashboard" element={<DashboardPage events={events} />} />
        <Route
  path="/reminders"
  element={<RemindersPage reminders={reminders} deleteReminder={deleteReminder} />}
/>
      </Routes>
    </Router>
  );
}

export default App;