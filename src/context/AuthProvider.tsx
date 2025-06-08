/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

import { AxiosError } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axiosInstance";
import Loading from "../utils/Loading";
import type { AuthContextType, User } from "../utils/UserTypes";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Fetch current logged-in user
  const fetchUser = async () => {
    try {
      const res = await api.get<User>("/user/current-user");
      setUser(res?.data);
    } catch (err: any) {
      if (
        err.response?.data?.message &&
        err.response?.data?.message.toLowerCase()?.includes("jwt expired")
      ) {
        await api.post("/auth/refresh-token");
        return fetchUser();
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Login
  const login = async (email: string, password: string) => {
    try {
      setError(null);
      setSubmitting(true);
      const res = await api.post("/auth/login", { email, password });
      if (res?.data?.success) {
        setSuccess(res.data.message || "Login successful");
        setSubmitting(false);
        await fetchUser();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data?.message || "Login failed");
      }
      setSuccess(null);
      setSubmitting(false);
    }
  };

  // Register
  const register = async (name: string, email: string, password: string) => {
    await api.post("/auth/register", { name, email, password });
    // await fetchUser();
  };

  // Logout
  const logout = async () => {
    await api.get("/auth/logout");
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  if (loading) {
    return <Loading message="Loading user data..." />;
  }
  const authInfo = {
    user,
    loading,
    login,
    register,
    logout,
    fetchUser,
    submitting,
    setSubmitting,
    error,
    setError,
    success,
    setSuccess,
    setUser,
    isAuthenticated: !!user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
