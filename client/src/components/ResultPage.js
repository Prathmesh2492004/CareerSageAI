import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultPage({ score, grade }) {
  const navigate = useNavigate();
  let recommendation = "";

  if (grade === '10') {
    if (score >= 8) recommendation = "Science Stream (PCM/PCB)";
    else if (score >= 6) recommendation = "Commerce Stream";
    else if (score >= 4) recommendation = "Arts / Humanities";
    else recommendation = "Diploma / Skill-based Programs";
  } else if (grade === '12') {
    if (score >= 12) recommendation = "Engineering / Medical";
    else if (score >= 9) recommendation = "Computer Science / IT";
    else if (score >= 6) recommendation = "Commerce / Business Studies";
    else if (score >= 3) recommendation = "Arts / Humanities";
    else recommendation = "Vocational / Skill-based courses";
  }

  return (
    <div>
      <h2>MCQ Test Result</h2>
      <p>Your Score: <b>{score}</b></p>
      <h3>🎯 Recommended Path:</h3>
      <p style={{ color: "green", fontWeight: "bold" }}>{recommendation}</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}

export default ResultPage;
