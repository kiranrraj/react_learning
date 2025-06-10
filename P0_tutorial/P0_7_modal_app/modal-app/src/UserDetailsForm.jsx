// src/UserDetailsForm.js
import React, { useState } from 'react';

const UserDetailsForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onSubmit({ name, email, age: parseInt(age) }); // Pass data to parent
    onClose(); // Close the modal after submission
  };

  return (
    <form onSubmit={handleSubmit} className="user-details-form">
      <h2>Enter User Details</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="1"
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit">Save Details</button>
        <button type="button" onClick={onClose} className="cancel-button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserDetailsForm;