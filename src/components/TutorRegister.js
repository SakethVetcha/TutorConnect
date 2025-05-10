import React, { useState } from 'react';

const TutorRegister = ({ addTutor }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    year: '',
    cgpa: '',
    subjects: [],
    availability: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({ ...prev, subjects: options }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTutor(formData);
  };

  return (
    <div className="form-container">
      <h2>Tutor Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Current Year:</label>
          <select name="year" value={formData.year} onChange={handleChange} required>
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>CGPA:</label>
          <input type="number" step="0.01" min="0" max="10" name="cgpa" 
                 value={formData.cgpa} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Subjects:</label>
          <select multiple name="subjects" value={formData.subjects} 
                 onChange={handleSubjectChange} required>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Computer Science">Computer Science</option>
          </select>
          <small>Hold Ctrl to select multiple</small>
        </div>
        
        <div className="form-group">
          <label>Availability:</label>
          <input type="text" name="availability" value={formData.availability}
                 onChange={handleChange} placeholder="e.g. 6-9 PM" required />
        </div>
        
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default TutorRegister;