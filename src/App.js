import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Section from './components/Section';
import Signup from './Auth/SignUp'; // Corrected case (Signup.js)
import Login from './Auth/Login';
import { fetchInitialTutors } from './Api/TS'; // Corrected case (tutorService.js)
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [tutors, setTutors] = useState([]);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadTutors = async () => {
      try {
        const initialTutors = await fetchInitialTutors();
        setTutors(initialTutors);
      } catch (err) {
        setError('Failed to load tutor data. Please try again later.');
        console.error('Error fetching tutors:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadTutors();
  }, []);

  const handleSignup = (userData) => {
    setUser({ 
      email: userData.email, 
      name: userData.name, 
      type: userData.userType 
    });
  };

  const handleLogin = (credentials) => {
    setUser({ 
      email: credentials.email, 
      name: 'Demo User', 
      type: 'student' 
    });
  };

  const addTutor = (newTutor) => {
    setTutors([...tutors, newTutor]);
    setActiveSection('tutorMatch');
  };

  return (
    <div className="app">
      <Header />
      <div className="content-container">
        {user ? (
          <>
            <Navigation 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
            <Section 
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              tutors={tutors}
              addTutor={addTutor}
              selectedTutor={selectedTutor}
              setSelectedTutor={setSelectedTutor}
            />
          </>
        ) : (
          <Routes>
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;