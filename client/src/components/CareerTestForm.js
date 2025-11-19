import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CareerTestForm({ user }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Math_Score: '',
    Logic_Score: '',
    Creativity: '',
    Communication: '',
    Preferred_Subject: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (user.grade === '10') {
      navigate('/mcq10');  // Go to 10th grade MCQ Test
    } else {
      navigate('/mcq12');  // Go to 12th grade MCQ Test
    }
  };

  return (
    <div>
      <h2>Enter Your Scores</h2>
      <form onSubmit={handleNext}>
        <div>
          <label>Math Score: </label>
          <input
            type="number"
            name="Math_Score"
            value={formData.Math_Score}
            onChange={handleChange}
            min="0"
            max="100"
            required
          />
        </div>
        <div>
          <label>Logic Score: </label>
          <input
            type="number"
            name="Logic_Score"
            value={formData.Logic_Score}
            onChange={handleChange}
            min="0"
            max="100"
            required
          />
        </div>
        <div>
          <label>Creativity (0=Low, 1=Medium, 2=High): </label>
          <input
            type="number"
            name="Creativity"
            value={formData.Creativity}
            onChange={handleChange}
            min="0"
            max="2"
            required
          />
        </div>
        <div>
          <label>Communication (0=Low, 1=Medium, 2=High): </label>
          <input
            type="number"
            name="Communication"
            value={formData.Communication}
            onChange={handleChange}
            min="0"
            max="2"
            required
          />
        </div>
        <div>
          <label>Preferred Subject (0=Math, 1=CS, 2=Bio...): </label>
          <input
            type="number"
            name="Preferred_Subject"
            value={formData.Preferred_Subject}
            onChange={handleChange}
            min="0"
            max="10"
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default CareerTestForm;
