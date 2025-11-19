import React, { useState } from 'react';

function LoginPage({ onLogin, onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      if (data.success) {
        // Pass full user object (name + grade) to App.js
        onLogin({ name: data.name, grade: data.grade });
      } else {
        alert('❌ Invalid email or password');
      }
    } catch (error) {
      alert('❌ Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account?{' '}
        <button onClick={onSwitchToRegister}>Register here</button>
      </p>
    </div>
  );
}

export default LoginPage;
