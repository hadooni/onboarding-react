import { useState } from "react";
import RoundButton from "../components/RoundButton";
import SignUpInput from "../components/SignUpInput";
import { useCreateUser } from "../hooks/mutations";
import { useNavigate } from "react-router-dom";
import { URLS } from "../constants/urls";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const { mutate } = useCreateUser();
  const navigate = useNavigate();

  const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id.trim() || !password.trim() || !nickname.trim()) {
      alert("회원가입 정보를 입력해주세요!");
      return;
    }
    mutate(
      { id, password, nickname },
      {
        onSuccess: () => {
          alert("회원가입 성공!");
          navigate(URLS.signIn);
        },
        onError: (error) => {
          console.error("회원가입에 실패했습니다.", error);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleCreateUser}
      className="flex flex-col gap-5 justify-center items-center font-bold text-lg mt-40"
    >
      <h2 className="text-3xl">회원가입</h2>
      <SignUpInput
        inputTitle="아이디"
        type="text"
        placeholder="아이디를 입력해주세요"
        value={id}
        setValue={setId}
      />
      <SignUpInput
        inputTitle="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        setValue={setPassword}
      />
      <SignUpInput
        inputTitle="닉네임"
        type="text"
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        setValue={setNickname}
      />
      <RoundButton type="submit" text="가입하기" />
    </form>
  );
};

export default SignUp;
