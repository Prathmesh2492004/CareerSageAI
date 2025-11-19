import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions10 = [
  { q: "Do you enjoy solving science-related problems?", a: ["Yes", "No"] },
  { q: "Do you like mathematics?", a: ["Yes", "No"] },
  { q: "Are you interested in business or finance?", a: ["Yes", "No"] },
  { q: "Do you enjoy reading literature, history, or arts?", a: ["Yes", "No"] },
  { q: "Do you prefer practical, hands-on work (like mechanics, electronics, etc.)?", a: ["Yes", "No"] },
  { q: "Do you like computers and technology?", a: ["Yes", "No"] },
  { q: "Do you want to study medicine in future?", a: ["Yes", "No"] },
  { q: "Do you enjoy public speaking and communication?", a: ["Yes", "No"] },
  { q: "Do you prefer creative activities (drawing, music, design)?", a: ["Yes", "No"] },
  { q: "Do you enjoy managing or leading groups?", a: ["Yes", "No"] },
];

function MCQTest10({ onSubmit }) {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(questions10.length).fill(null));

  const handleAnswer = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    const score = answers.filter(a => a === "Yes").length;
    onSubmit(score);
    navigate("/result");
  };

  return (
    <div>
      <h2>10th Grade Stream Selection Test</h2>
      {questions10.map((q, i) => (
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

export default MCQTest10;
