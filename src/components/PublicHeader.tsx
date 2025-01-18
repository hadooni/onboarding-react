import { Link } from "react-router-dom";
import { URLS } from "../constants/urls";

const PublicHeader = () => {
  return (
    <header
      data-testid="public-header"
      className="bg-gray-200 w-full flex justify-between items-center px-10 py-6 font-bold"
    >
      <Link to={URLS.home}>Main</Link>
      <div className="flex gap-6">
        <Link to={URLS.signIn}>SignIn</Link>
        <Link to={URLS.signUp}>SignUp</Link>
      </div>
    </header>
  );
};

export default PublicHeader;
