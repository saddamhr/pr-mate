import React, { useState } from 'react';
import { fetchGeneratedText } from '../../helpers/apiHelper';
import { copyToClipboard } from '../../helpers/copyHelper';
import { typeText } from '../../helpers/typingEffectHelper';
import { InputField } from './../InputField/InputField.jsx';
import { SubmitButton } from '../SubmitButton/SubmitButton.jsx';
import { CopyButton } from '../CopyButton/CopyButton.jsx';
import { ToastNotification } from '../ToastNotification/ToastNotification.jsx';
import { LoadingSkeleton } from '../LoadingSkeleton/LoadingSkeleton.js';
import { MarkdownRenderer } from '../MarkdownRenderer/MarkdownRenderer.jsx';
import { useToast } from '../../hooks/useToast';

import './InputForm.css';

const InputForm = () => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const { toastVisible, showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setData('');
    try {
      const generatedText = await fetchGeneratedText(title);
      typeText(generatedText, setData, setLoading);
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
        <InputField value={title} onChange={(e) => setTitle(e.target.value)} />
        <SubmitButton loading={loading} />
      </form>

      {loading ? (
        <LoadingSkeleton />
      ) : (
        data && (
          <>
            <MarkdownRenderer content={data} />
            <CopyButton onClick={() => copyToClipboard(data, showToast)} />
          </>
        )
      )}

      {toastVisible && <ToastNotification />}
    </div>
  );
};

export default InputForm;
