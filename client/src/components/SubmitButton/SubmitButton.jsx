import './SubmitButton.css';

export const SubmitButton = ({ loading, typing }) => (
  <button type="submit" className="form-button" disabled={loading | typing}>
    {loading | typing ? 'Generating...' : 'Generate'}
  </button>
);
