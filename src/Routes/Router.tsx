import { BrowserRouter, Route, Routes } from "react-router-dom";
import { URLS } from "../constants/urls";
import MainPage from "../pages/MainPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";
import Layout from "../components/Layout";
import PrivateRoute from "./PrivateRoute";
import TestPage from "../pages/TestPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path={URLS.home} element={<MainPage />} />
        <Route path={URLS.signIn} element={<SignIn />} />
        <Route path={URLS.signUp} element={<SignUp />} />
        <Route path={URLS.test} element={<TestPage />} />
        <Route
          path={URLS.myPage}
          element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
