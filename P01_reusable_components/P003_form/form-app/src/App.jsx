import React, { useState } from 'react';

// Custom PasswordInput Component
const PasswordInput = ({ value, onChange, placeholder, ariaLabel, id, name, isInvalid }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Determine password strength based on length and character types
  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (password.length >= 10) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase
    if (/[a-z]/.test(password)) strength += 1; // Lowercase
    if (/[0-9]/.test(password)) strength += 1; // Numbers
    if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Special characters

    if (strength < 3) return { text: 'Weak', colorClass: 'text-red' };
    if (strength < 5) return { text: 'Medium', colorClass: 'text-yellow' };
    return { text: 'Strong', colorClass: 'text-green' };
  };

  const strength = getPasswordStrength(value);

  return (
    <div className="password-input-container">
      <input
        type={showPassword ? 'text' : 'password'}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-input ${isInvalid ? 'input-invalid animate-shake' : ''}`}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="toggle-password-button"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414L5.586 8H4a1 1 0 000 2h1.586l-1.293 1.293a1 1 0 001.414 1.414L8 11.414V14a1 1 0 102 0v-2.586l1.293 1.293a1 1 0 101.414-1.414L11.414 10H14a1 1 0 000-2h-1.586l1.293-1.293a1 1 0 10-1.414-1.414L10 8.586V6a1 1 0 10-2 0v2.586L3.707 2.293zM10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      {value.length > 0 && (
        <p className={`password-strength-text ${strength.colorClass}`}>
          Password Strength: {strength.text}
        </p>
      )}
    </div>
  );
};

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else if (name === 'role') {
      setRole(value);
    }

    if (isSubmitted) {
      setValidationErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
      if ((name === 'password' || name === 'confirmPassword') && password !== confirmPassword) {
        setValidationErrors(prevErrors => ({ ...prevErrors, passwordMatch: 'Passwords do not match.' }));
      } else if (name === 'password' || name === 'confirmPassword') {
        setValidationErrors(prevErrors => ({ ...prevErrors, passwordMatch: '' }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    let errors = {};
    let hasError = false;
    if (!username) {
      errors.username = 'Username is required.';
      hasError = true;
    }
    if (!password) {
      errors.password = 'Password is required.';
      hasError = true;
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm password is required.';
      hasError = true;
    }
    if (!role) {
      errors.role = 'Role is required.';
      hasError = true;
    }

    if (password && confirmPassword && password !== confirmPassword) {
      errors.passwordMatch = 'Passwords do not match.';
      hasError = true;
    }

    if (password && password.length < 6) {
      errors.passwordStrength = 'Password must be at least 6 characters long.';
      hasError = true;
    }

    setValidationErrors(errors);

    if (hasError) {
      setSubmissionStatus('Please correct the errors in the form.');
      return;
    }

    console.log('New User Data Submitted by Admin:', {
      username,
      password: '*** (hashed in real app) ***',
      role,
    });

    setSubmissionStatus('User created successfully!');

    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setRole('');
    setValidationErrors({});
    setIsSubmitted(false);
  };

  return (
    // Main container for the form, centered and responsive
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4 sm:p-6 font-sans">
      <div className="form-container">
        <h2 className="form-title">User Registration (Admin)</h2>
        <p className="form-description">
          Use this form to create new user accounts.
        </p>

        <form onSubmit={handleSubmit} className="form-spacing">
          {/* Username Input Field */}
          <div>
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              className={`form-input ${validationErrors.username ? 'input-invalid animate-shake' : ''}`}
              placeholder="Enter username"
              aria-label="Username"
            />
            {validationErrors.username && (
              <p className="error-message">{validationErrors.username}</p>
            )}
          </div>

          {/* Password Input Field */}
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <PasswordInput
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
              ariaLabel="Password"
              isInvalid={validationErrors.password || validationErrors.passwordStrength || validationErrors.passwordMatch}
            />
            {validationErrors.password && (
              <p className="error-message">{validationErrors.password}</p>
            )}
            {validationErrors.passwordStrength && (
              <p className="error-message">{validationErrors.passwordStrength}</p>
            )}
          </div>

          {/* Confirm Password Input Field */}
          <div>
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              ariaLabel="Confirm Password"
              isInvalid={validationErrors.confirmPassword || validationErrors.passwordMatch}
            />
            {validationErrors.confirmPassword && (
              <p className="error-message">{validationErrors.confirmPassword}</p>
            )}
            {validationErrors.passwordMatch && (
              <p className="error-message">{validationErrors.passwordMatch}</p>
            )}
          </div>

          {/* Role Select Field */}
          <div>
            <label htmlFor="role" className="form-label">
              User Role
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={handleChange}
              className={`form-input ${validationErrors.role ? 'input-invalid animate-shake' : ''}`}
              aria-label="User Role"
            >
              <option value="">Select a role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
            </select>
            {validationErrors.role && (
              <p className="error-message">{validationErrors.role}</p>
            )}
          </div>

          {/* Submission Status Message */}
          {submissionStatus && (
            <p className={`submission-status-message ${submissionStatus.includes('successfully') ? 'status-success' : 'status-error'}`}>
              {submissionStatus}
            </p>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="form-button"
              aria-label="Create User"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
