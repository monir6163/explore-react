import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      {/* <div className="container">
        <Sidebar />
      </div> */}
      <div className="container">
        {/* The Outlet component will render the child routes */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
