import AuthLayout from "@/layout/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
  // web routes
  // This is the main layout that wraps all the routes
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "",
        element: <Home />, // Replace with your home component
      },
    ],
  },
  // dashboard routes
  // This is the dashboard layout that wraps all the dashboard routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
  // auth routes
  // This is the auth layout that wraps all the auth routes
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <LoginPage />,
      },
    ],
  },
]);
