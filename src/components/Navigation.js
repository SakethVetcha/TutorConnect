import React from 'react';
import './Navigation.css';

function Navigation({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'tutorMatch', label: 'Tutor Match' },
    { id: 'scheduleSession', label: 'Schedule Session' },
    { id: 'registerTutor', label: 'Register as Tutor' },
    { id: 'feedback', label: 'Feedback' }
  ];

  return (
    <nav className="navigation">
      <ul>
        {navItems.map(item => (
          <li key={item.id}>
            <button
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;