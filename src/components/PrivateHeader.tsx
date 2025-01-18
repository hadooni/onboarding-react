import { Link } from "react-router-dom";
import { URLS } from "../constants/urls";
import useSignOut from "../hooks/useSignOut";

const PrivateHeader = () => {
  const signOut = useSignOut();
  return (
    <header
      data-testid="private-header"
      className="bg-gray-200 w-full flex justify-between items-center px-10 py-6 font-bold"
    >
      <Link to={URLS.home}>Main</Link>
      <div className="flex gap-6">
        <Link to={URLS.myPage}>Mypage</Link>
        <button onClick={signOut}>LogOut</button>
      </div>
    </header>
  );
};

export default PrivateHeader;
