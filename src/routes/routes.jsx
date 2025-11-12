import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Bills from "../pages/Bills";
import SingleBill from "../pages/SingleBill";
import MyBill from "../pages/MyBill";
import ProtectedLayout from "../components/layout/ProtectedLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "bills",
        element: <Bills />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "my-bills",
        element: <MyBill />,
      },
      {
        path: "bills/:id",
        element: <SingleBill />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
