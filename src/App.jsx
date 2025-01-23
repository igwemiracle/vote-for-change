import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Homepage from './pages/Homepage';
import CandidateList from './pages/CandidateList';
import CandidateProfile from './pages/CandidateProfile';
import VotingPage from './pages/VotingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage'; // New component
import ProtectedRoute from './components/ProtectedRoute'; // Enhanced component
import Navbar from './components/Navbar'

import './index.css';
import Footer from './components/Footer';


const App = () => (
  <Router>
    <Navbar />
    <div className='relative'>
      <PageRoutes />
    </div>
    <Footer />
  </Router>
);


const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/candidates" element={<CandidateList />} />
      <Route path="/candidates/:id" element={<CandidateProfile />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/vote"
        element={
          <ProtectedRoute>
            <VotingPage />
          </ProtectedRoute>
        }
      />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
