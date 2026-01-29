import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const isAdminLoggedIn = document.cookie.includes("laravel_session"); // simple check

  return isAdminLoggedIn ? children : <Navigate to="/" />;
};

export default AdminRoute;
