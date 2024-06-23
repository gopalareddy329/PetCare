// Step1PersonalInfoForm.js
import React from 'react';

const Step1PersonalInfoForm = ({ onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onNext(); // Move to the next step
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
      {/* Personal info form fields */}
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1PersonalInfoForm;
