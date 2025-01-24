import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';


// Redux actions
import { restoreUser } from './store/session/sessionActions';

// Your components
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';





function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Attempt to restore user from session when the app first loads
    dispatch(restoreUser());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;