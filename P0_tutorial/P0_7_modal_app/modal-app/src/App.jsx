// src/App.js
import React, { useState } from 'react';
import Modal from './Modal';
import UserDetailsForm from './UserDetailsForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null); // State to store user details

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveUserDetails = (details) => {
    setUserDetails(details); // Update the userDetails state
    // You could also send this data to an API here
    console.log('User details saved:', details);
    closeModal(); // Close modal after saving
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Details Manager</h1>
        <button onClick={openModal}>Enter User Details</button>
      </header>

      <main className="App-main-content">
        <h2>Submitted User Information:</h2>
        {userDetails ? (
          <div className="user-info-display">
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Age:</strong> {userDetails.age}</p>
          </div>
        ) : (
          <p>No user details entered yet. Click the button above to add them.</p>
        )}
      </main>

      <Modal show={isModalOpen} onClose={closeModal}>
        {/* Pass the save handler and close handler to the form */}
        <UserDetailsForm onSubmit={handleSaveUserDetails} onClose={closeModal} />
      </Modal>
    </div>
  );
}

export default App;