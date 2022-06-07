import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, auth, ...rest }) {
  const authState = useSelector((state) => state.authReducer);
  const token = localStorage.getItem("token");
  return authState.token ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "/",
      }}
    />
  );
}

export default ProtectedRoute;
