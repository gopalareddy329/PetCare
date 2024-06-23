// Step2EducationForm.js
import React from 'react';

const Step2EducationForm = ({ onPrevious, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onSubmit(); // Submit the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Education Details</h2>
      {/* Education info form fields */}
      <button type="button" onClick={onPrevious}>Previous</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Step2EducationForm;
