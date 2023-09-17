import { Navigate } from "react-router-dom";
import React from "react";

const PrivateWithSingleCheck = ({ children }) => {
  const isUserAccess = localStorage.getItem("isUserAccess") ? true : false;

  if (isUserAccess === true) {
    return children;
  }
  return <Navigate to="/" replace />;
};
export default PrivateWithSingleCheck;
