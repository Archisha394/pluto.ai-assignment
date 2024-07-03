import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Profile from './Components/Profile';
import { Container, CircularProgress } from '@mui/material';
import './App.css';

const App = () => {
  console.log(process.env.REACT_APP_API_GENERATIVE_LANGUAGE_CLIENT_API_GENERATIVE_LANGUAGE_CLIENT);
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [error, setError] = useState('');

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setError('');
    try {
      const response = await axios({
        

        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_API_GENERATIVE_LANGUAGE_CLIENT}`,
        method: 'post',
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      const newAnswer = response.data.candidates[0].content.parts[0].text;
      setChatHistory([...chatHistory, { question, answer: newAnswer }]);
      setQuestion('');
    } catch (error) {
      console.log(error);
      setError('Sorry - Something went wrong. Please try again!');
    }
    setGeneratingAnswer(false);
  }

  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/" className="login-button">Profile</Link>
          <Link to="/" className="login-button">Login</Link>
        </div>
        <Container>
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route path="/chat" element={
              <div id="chat-container">
                <div id="chat-history">
                  {chatHistory.map((chat, index) => (
                    <div key={index}>
                      <div className="user-message">{chat.question}</div>
                      <div className="bot-message">
                        <ReactMarkdown>{chat.answer}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
                <form id="chat-form" onSubmit={generateAnswer}>
                  <input
                    type="text"
                    id="user-input"
                    required
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter your message"
                  />
                  <button type="submit" disabled={generatingAnswer}>
                    {generatingAnswer ? <CircularProgress size={24} /> : 'Send'}
                  </button>
                </form>
                {error && <div className="error-message">{error}</div>}
                <div id="loader" style={{ display: generatingAnswer ? 'block' : 'none' }}>
                  Loading
                </div>
              </div>
            } />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
