import React from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownRenderer.css';

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
