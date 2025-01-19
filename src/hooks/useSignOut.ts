import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { URLS } from "../constants/urls";

const useSignOut = () => {
  const navigate = useNavigate();
  const { setAccessToken, setIsLoggedIn, setNickname, setAvatar, setUserId } =
    useAuthStore();

  const onSignOut = async () => {
    setAccessToken(null);
    setIsLoggedIn(false);
    setNickname("");
    setAvatar(null);
    setUserId(0);

    navigate(URLS.home);
  };

  return onSignOut;
};

export default useSignOut;
