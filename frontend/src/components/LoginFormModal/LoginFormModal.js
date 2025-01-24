import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, demoLogin } from '../../store/session/sessionActions';
import './LoginFormModal.css';

function LoginFormModal({ onClose }) {
  const dispatch = useDispatch();

  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any old errors
    setErrors('');

    try {
      await dispatch(login({ credential, password }));
      // success => close modal
      onClose();
    } catch (err) {
      // if backend returns: { "errors": ["The provided credentials were invalid"] }
      setErrors(err.errors || 'The provided credentials were invalid');
    }
  };

  const handleDemoLogin = async () => {
    try {
      await dispatch(demoLogin());
      onClose();
    } catch (err) {
      setErrors(err.errors || 'Demo login failed');
    }
  };

  // Button disabled if credential < 4 or password < 6
  const isDisabled = credential.length < 4 || password.length < 6;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        
        <h2>Log In</h2>

        {errors && <div className="error-message">{errors}</div>}

        <form onSubmit={handleSubmit}>
          <label>
            Username or Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button type="submit" disabled={isDisabled}>
            Log In
          </button>
        </form>

        <button className="demo-btn" onClick={handleDemoLogin}>
          Log in as Demo User
        </button>
      </div>
    </div>
  );
}

export default LoginFormModal;
