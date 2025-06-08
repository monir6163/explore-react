import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loading from "../utils/Loading";

const PrivetRouter = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return (
      <Navigate
        to={"/auth/login"}
        state={{ from: location }}
        replace
      ></Navigate>
    );
  }
  return children;
};

export default PrivetRouter;
