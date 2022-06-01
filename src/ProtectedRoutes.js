import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
const ProtectedRoutes = () => {
  const location = useLocation();
  //rota para verificar se o token é válido

  return localStorage.getItem("accessToken") ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
