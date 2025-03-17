import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return isAuthenticated && user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
