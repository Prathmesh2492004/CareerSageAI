import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MarksForm({ onNext }) {
  const [formData, setFormData] = useState({
    Math_Score: '',
    Logic_Score: '',
    Creativity: '',
    Communication: '',
    Preferred_Subject: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    onNext(formData);
    navigate("/mcq");
  };

  return (
    <div>
      <h2>Enter Your Marks</h2>
      <form onSubmit={handleNext}>
        <input type="number" name="Math_Score" placeholder="Math Score" onChange={handleChange} required /><br />
        <input type="number" name="Logic_Score" placeholder="Logic Score" onChange={handleChange} required /><br />
        <input type="number" name="Creativity" placeholder="Creativity (0-2)" onChange={handleChange} required /><br />
        <input type="number" name="Communication" placeholder="Communication (0-2)" onChange={handleChange} required /><br />
        <input type="number" name="Preferred_Subject" placeholder="Preferred Subject (0=Math,1=CS...)" onChange={handleChange} required /><br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default MarksForm;
