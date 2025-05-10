import React from 'react';

const TutorMatch = ({ tutors, setActiveSection, setSelectedTutor }) => {
  return (
    <div className="tutor-grid">
      <h2>Available Tutors</h2>
      {tutors.length > 0 ? (
        <div className="tutor-cards">
          {tutors.map((tutor, index) => (
            <div 
              className="tutor-card clickable"
              key={index}
              onClick={() => {
                setSelectedTutor(tutor);
                setActiveSection('scheduleSession');
              }}
            >
              <h3>{tutor.name}</h3>
              <p><strong>Year:</strong> {tutor.year}</p>
              <p><strong>Subjects:</strong> {tutor.subjects.join(', ')}</p>
              <p><strong>Available:</strong> {tutor.availability}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No tutors available yet. Be the first to register!</p>
      )}
    </div>
  );
};

export default TutorMatch;