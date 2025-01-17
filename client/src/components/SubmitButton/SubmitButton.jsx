import './SubmitButton.css';

export const SubmitButton = ({ loading }) => (
  <button type="submit" className="form-button" disabled={loading}>
    {loading ? 'Generating...' : 'Generate'}
  </button>
);
