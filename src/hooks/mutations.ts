import { useMutation } from "@tanstack/react-query";
import { signInUser, signUpUser, updateUserProfile } from "../api/auth";
import { UpdateUserData, UserSignInData, UserSignUpData } from "../types/auth";
import useAuthStore from "../store/useAuthStore";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ id, password, nickname }: UserSignUpData) =>
      signUpUser({ id, password, nickname }),
    onError: (error) => {
      console.error("회원가입 failed:", error);
    },
  });
};

export const useLogInUser = () => {
  const { setAccessToken, setNickname, setIsLoggedIn } = useAuthStore();

  return useMutation({
    mutationFn: ({ id, password }: UserSignInData) =>
      signInUser({ id, password }),
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      setNickname(data.nickname);
      setIsLoggedIn(true);
    },
    onError: (error) => {
      console.error("Login failed:", error);
      setAccessToken(null);
      setIsLoggedIn(false);
    },
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: ({ profileUrl, newNickname }: UpdateUserData) =>
      updateUserProfile({ profileUrl, newNickname }),
  });
};
