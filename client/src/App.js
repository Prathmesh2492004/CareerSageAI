import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import CareerTestForm from './components/CareerTestForm';
import MCQTest from './components/MCQTest';        // for 12th students
import MCQTest10th from './components/MCQTest10th'; // for 10th students
import './App.css';

function App() {
  const [isRegistered, setIsRegistered] = useState(true);
  const [user, setUser] = useState(null);
  const [step, setStep] = useState('form'); // form → mcq → result

  if (!user) {
    return isRegistered ? (
      <LoginPage
        onLogin={(u) => setUser(u)}
        onSwitchToRegister={() => setIsRegistered(false)}
      />
    ) : (
      <RegisterPage onRegistered={() => setIsRegistered(true)} />
    );
  }

  return (
    <div className="App">
      <h2>Welcome, {user.name} ({user.grade} Student)</h2>

      {/* If student is 12th */}
      {user.grade === '12' && (
        <>
          {step === 'form' && <CareerTestForm onNext={() => setStep('mcq')} />}
          {step === 'mcq' && <MCQTest onComplete={() => setStep('result')} />}
          {step === 'result' && (
            <h3>🎯 Career Recommendation displayed here after MCQ test!</h3>
          )}
        </>
      )}

      {/* If student is 10th */}
      {user.grade === '10' && (
        <>
          {step === 'form' && <CareerTestForm onNext={() => setStep('mcq')} />}
          {step === 'mcq' && <MCQTest10th onComplete={() => setStep('result')} />}
          {step === 'result' && (
            <h3>🎯 Guidance for 10th Students shown here after MCQ test!</h3>
          )}
        </>
      )}
    </div>
  );
}

export default App;
