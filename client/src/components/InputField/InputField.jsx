import './InputField.css';

export const InputField = ({ value, onChange }) => (
  <input
    id="title"
    type="text"
    value={value}
    onChange={onChange}
    className="form-input"
    required
    placeholder="Enter issue or task title (e.g., CRM-01: Details page not showing)"
  />
);
