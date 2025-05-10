import React from 'react';

const Dashboard = ({ setActiveSection }) => (
  <div className="dashboard-content">
    <div className="welcome-box">
      <h2>Knowledge Exchange Platform</h2>
    </div>
    
    <div className="tagline-box">
      <p className="tagline">Bridging generations through education</p>
    </div>
    
    <div className="feature-cards">
      <div 
        className="card clickable" 
        onClick={() => setActiveSection('registerTutor')}
      >
        <div className="card-icon">👨‍🏫</div>
        <h3>For Senior Mentors</h3>
        <p>Click to register as tutor</p>
      </div>
      
      <div 
        className="card clickable"
        onClick={() => setActiveSection('tutorMatch')}
      >
        <div className="card-icon">🧑‍🎓</div>
        <h3>For Junior Learners</h3>
        <p>Find your perfect mentor</p>
      </div>
    </div>

    {}
    <div className="testimonial-box">
      <blockquote>
        "My mentor's teaching experience helped me grasp concepts faster than any textbook!"
        <footer>- Engineering Student</footer>
      </blockquote>
    </div>
  </div>
);

export default Dashboard;