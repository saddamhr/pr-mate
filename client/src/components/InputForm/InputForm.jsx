import React, { useState } from 'react';
import axios from 'axios';
import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer';
import './InputForm.css';

const InputForm = () => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

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

  // Copy to Clipboard function
  const copyToClipboard = () => {
    if (data) {
      navigator.clipboard
        .writeText(data)
        .then(() => {
          showToast();
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    }
  };

  // Show the toaster for a few seconds
  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000); // Toast visibility duration (3 seconds)
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
        data && (
          <>
            <MarkdownRenderer content={data} />
            <button className="copy-button" onClick={copyToClipboard}>
              Copy to Clipboard
            </button>
          </>
        )
      )}
      {/* Toast Notification */}
      {/* Toast Notification */}
      {toastVisible && (
        <div className="toast-notification">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check-circle"
          >
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          Content copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default InputForm;
