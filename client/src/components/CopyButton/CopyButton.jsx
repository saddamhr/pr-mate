import './CopyButton.css';

export const CopyButton = ({ onClick }) => (
  <button className="copy-button" onClick={onClick}>
    Copy to Clipboard
  </button>
);
