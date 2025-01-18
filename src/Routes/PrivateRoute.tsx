import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { URLS } from "../constants/urls";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAuthStore();

  if (!accessToken) {
    return <Navigate to={URLS.signIn} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
