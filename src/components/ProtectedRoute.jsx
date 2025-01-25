import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const isAuthenticated = users.length > 0; // Check if a user is registered
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate
      to="/signin"
      replace
      state={{ message: 'You must have an account to cast your vote.', from: location.pathname }}
    />
  );
};

export default ProtectedRoute;
