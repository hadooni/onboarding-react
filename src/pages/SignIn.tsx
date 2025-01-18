import { useState } from "react";
import RoundButton from "../components/RoundButton";
import RoundInput from "../components/RoundInput";
import { useLogInUser } from "../hooks/mutations";
import { useNavigate } from "react-router-dom";
import { URLS } from "../constants/urls";

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate } = useLogInUser();

  const handleLogInUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id.trim() || !password.trim()) {
      alert("로그인 정보를 입력해주세요!");
      return;
    }
    mutate(
      { id, password },
      {
        onSuccess: () => {
          navigate(URLS.home);
        },
      }
    );
  };

  const navigateToSignUp = () => {
    navigate(URLS.signUp);
  };

  return (
    <form
      onSubmit={handleLogInUser}
      className="flex flex-col gap-5 justify-center items-center font-bold text-lg mt-40"
    >
      <h2 className="text-3xl">로그인</h2>
      <RoundInput
        value={id}
        setValue={setId}
        type="text"
        placeholder="아이디"
      />
      <RoundInput
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="비밀번호"
      />
      <div className="mt-2 flex flex-col gap-3">
        <RoundButton type="submit" text="로그인" />
        <RoundButton onClick={navigateToSignUp} type="button" text="회원가입" />
      </div>
    </form>
  );
};

export default SignIn;
