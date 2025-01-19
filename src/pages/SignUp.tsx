import { useState } from "react";
import RoundButton from "../components/RoundButton";
import SignUpInput from "../components/SignUpInput";
import { useCreateUser } from "../hooks/mutations";
import { useNavigate } from "react-router-dom";
import { URLS } from "../constants/urls";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regularExpression";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const { mutate } = useCreateUser();
  const navigate = useNavigate();

  const handleCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !nickname.trim()) {
      alert("회원가입 정보를 입력해주세요!");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      alert("아이디를 이메일 형식으로 입력해주세요.");
      return;
    }
    if (!PASSWORD_REGEX.test(password)) {
      alert(
        "비밀번호를 숫자, 영어, 특수문자를 포함한 8자 이상, 15자 이하로 입력해주세요."
      );
      return;
    }
    mutate(
      { email, password, nickname },
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
        inputTitle="이메일"
        type="text"
        placeholder="이메일을 입력해주세요"
        value={email}
        setValue={setEmail}
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
