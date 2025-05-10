import React, { useState } from 'react';
import './Feedback.css';

const Feedback = ({ tutors }) => {
  const [selectedTutor, setSelectedTutor] = useState('');
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { selectedTutor, rating, comments });
    setSubmitted(true);
    // Reset form
    setSelectedTutor('');
    setRating(5);
    setComments('');
  };

  if (submitted) {
    return (
      <div className="feedback-container">
        <h2>Thank You!</h2>
        <p>Your feedback has been submitted.</p>
        <button onClick={() => setSubmitted(false)} className="btn-submit">
          Submit New Feedback
        </button>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <h2>Leave Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Tutor:</label>
          <select
            value={selectedTutor}
            onChange={(e) => setSelectedTutor(e.target.value)}
            required
          >
            <option value="">-- Choose a tutor --</option>
            {tutors.map((tutor) => (
              <option key={tutor.phone} value={tutor.name}>
                {tutor.name} - {tutor.subjects.join(', ')}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <React.Fragment key={star}>
                <input
                  type="radio"
                  id={`star-${star}`}
                  name="rating"
                  value={star}
                  checked={rating === star}
                  onChange={() => setRating(star)}
                />
                <label htmlFor={`star-${star}`} className="star-label">
                  {star <= rating ? '★' : '☆'}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Your feedback..."
            rows="4"
          />
        </div>

        <button type="submit" className="btn-submit">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;