import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateWithOutlet = ({ children }) => {
  const isUserAccess = localStorage.getItem("isUserAccess") ? true : false;

  return <>{isUserAccess ? <Outlet /> : <Navigate to="/" />}</>;
};
export default PrivateWithOutlet;
