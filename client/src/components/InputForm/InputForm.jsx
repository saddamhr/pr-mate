import React, { useState } from 'react';
import axios from 'axios';
import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer';
import './InputForm.css';

const InputForm = () => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setData('');
    try {
      const response = await axios.post('http://localhost:5001/api/generate', {
        title,
      });
      const generatedText = response.data;
      typeText(generatedText);
    } catch (error) {
      console.error('Error generating output:', error);
    } finally {
      setLoading(false);
    }
  };

  // Typing effect function
  const typeText = (text) => {
    let index = 0;
    setData(text[0]);
    const interval = setInterval(() => {
      index++;
      if (index < text.length) {
        setData((prevData) => prevData + text[index]);
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 20);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Generate Ticket Details</h2>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          required
          placeholder="Enter issue or task title (e.g., CRM-01: Details page not showing)"
        />
        <button type="submit" className="form-button" disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>

      {loading ? (
        <div className="skeleton-loader">
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
        </div>
      ) : (
        data && <MarkdownRenderer content={data} />
      )}
    </div>
  );
};

export default InputForm;
