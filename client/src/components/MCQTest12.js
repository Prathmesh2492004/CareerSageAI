import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from './questions';

function MCQTest({ onSubmit }) {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    const score = answers.filter(a => a === "Yes").length;
    onSubmit(score); // Pass score to App.js
    navigate("/result");
  };

  return (
    <div>
      <h2>Career MCQ Test</h2>
      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: '10px' }}>
          <p>{i + 1}. {q.q}</p>
          {q.a.map((opt, j) => (
            <label key={j} style={{ marginRight: '10px' }}>
              <input
                type="radio"
                name={`q${i}`}
                value={opt}
                onChange={() => handleAnswer(i, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} disabled={answers.includes(null)}>Submit</button>
    </div>
  );
}

export default MCQTest;
