import React, { useState } from 'react';

function RegisterPage({ onRegistered }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    grade: '10', // Default is 10th
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      alert('✅ Registration successful! You can now login.');
      onRegistered();
    } catch (error) {
      alert('❌ Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Grade: </label>
          <select name="grade" value={formData.grade} onChange={handleChange}>
            <option value="10">10th</option>
            <option value="12">12th</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
