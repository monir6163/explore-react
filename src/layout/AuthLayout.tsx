import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ProgressBar from "@/components/ProgressBar";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
