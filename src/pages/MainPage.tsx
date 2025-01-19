import { Link } from "react-router-dom";
import { URLS } from "../constants/urls";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-10">
      <h2>MainPage</h2>
      <Link to={URLS.test} className="text-blue-600 underline">
        json placeholder 외부 통신 테스트
      </Link>
    </div>
  );
};

export default MainPage;
