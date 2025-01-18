import useAuthStore from "../store/useAuthStore";
import PrivateHeader from "./PrivateHeader";
import PublicHeader from "./PublicHeader";

const Layout = () => {
  const { accessToken } = useAuthStore();

  return <>{accessToken ? <PrivateHeader /> : <PublicHeader />}</>;
};

export default Layout;
