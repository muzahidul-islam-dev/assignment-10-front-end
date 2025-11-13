import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import { UserProvider } from "../../context/AuthContext";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

function ProtectedLayout() {
  const { user, loading } = useContext(UserProvider);
  const location = useLocation();


  if (loading) return <Loading />;

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>;
}

export default ProtectedLayout;
