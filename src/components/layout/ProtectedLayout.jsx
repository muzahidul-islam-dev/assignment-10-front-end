import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import { UserProvider } from "../../context/AuthContext";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

function ProtectedLayout() {
  const { user, loading } = useContext(UserProvider);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth/login", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Loading />;
  }

  return <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>;
}

export default ProtectedLayout;
