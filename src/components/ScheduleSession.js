import React, { useState } from 'react';

const ScheduleSession = ({ selectedTutor }) => {  // Removed setActiveSection since we won't use it
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    faculty: '',
    studentType: 'junior', 
    preferredTime: ''
  });

  // Handle case when no tutor is selected
  if (!selectedTutor) {
    return <div className="schedule-container"></div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just show the alert without any navigation
    alert(`Session scheduled with ${selectedTutor.name}!`);
    // That's it - no redirection happens after this
  };

  return (
    <div className="schedule-container">
      <div className="tutor-details-sidebar">
        <h3>Selected Tutor</h3>
        <div className="tutor-profile">
          <div className="tutor-avatar">👨‍🏫</div>
          <h4>{selectedTutor.name}</h4>
          <p><strong>Year:</strong> {selectedTutor.year}</p>
          <p><strong>CGPA:</strong> {selectedTutor.cgpa}</p>
          <p><strong>Subjects:</strong></p>
          <ul className="subject-list">
            {selectedTutor.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
          <p><strong>Availability:</strong> {selectedTutor.availability}</p>
          <p><strong>Contact:</strong> {selectedTutor.phone}</p>
        </div>
      </div>

      <div className="schedule-form">
        <h2>Schedule Session</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Full Name:</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Year:</label>
            <select
              value={formData.year}
              onChange={(e) => setFormData({...formData, year: e.target.value})}
              required
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          <div className="form-group">
            <label>Faculty/Department:</label>
            <input 
              type="text" 
              value={formData.faculty}
              onChange={(e) => setFormData({...formData, faculty: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label></label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="studentType"
                  value="junior"
                  checked={formData.studentType === 'junior'}
                  onChange={() => setFormData({...formData, studentType: 'junior'})}
                />
                
              </label>
              <label>
                <input
                  type="radio"
                  name="studentType"
                  value="senior"
                  checked={formData.studentType === 'senior'}
                  onChange={() => setFormData({...formData, studentType: 'senior'})}
                />
                
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Preferred Time:</label>
            <input
              type="text"
              value={formData.preferredTime}
              onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
              placeholder="e.g. Weekdays 6-8 PM"
              required
            />
          </div>

         

          <button type="submit" className="submit-btn">
            Confirm Session
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleSession;