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
    try {
      const response = await axios.post('http://localhost:5001/api/generate', {
        title,
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error generating output:', error);
    } finally {
      setLoading(false);
    }
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
        <button type="submit" className="form-button">
          Generate
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
