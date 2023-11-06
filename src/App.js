import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);

  const handleQuestionSubmit = () => {
    // Add the question to the answers list
    setAnswers([...answers, question]);

    // Clear the input field
    setQuestion('');
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Ask your question</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ask"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={handleQuestionSubmit}>
                Send
              </button>
            </div>
          </div>
          {answers.length > 0 && (
            <div>
              <h2 className="text-center">Answers</h2>
              <ul>
                {answers.map((answer, index) => (
                  <li key={index}>{answer}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
