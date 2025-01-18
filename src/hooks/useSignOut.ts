import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { URLS } from "../constants/urls";

const useSignOut = () => {
  const navigate = useNavigate();
  const { setAccessToken, setIsLoggedIn, setNickname } = useAuthStore();

  const onSignOut = async () => {
    setAccessToken(null);
    setIsLoggedIn(false);
    setNickname("");

    navigate(URLS.home);
  };

  return onSignOut;
};

export default useSignOut;
