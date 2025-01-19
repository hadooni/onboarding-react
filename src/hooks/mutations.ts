import { useMutation } from "@tanstack/react-query";
import { signInUser, signUpUser, updateUserProfile } from "../api/auth";
import { UpdateUserData, UserSignInData, UserSignUpData } from "../types/auth";
import useAuthStore from "../store/useAuthStore";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ email, password, nickname }: UserSignUpData) =>
      signUpUser({ email, password, nickname }),
    onError: (error) => {
      console.error("회원가입 failed:", error);
    },
  });
};

export const useLogInUser = () => {
  const { setAccessToken, setNickname, setIsLoggedIn, setUserId } =
    useAuthStore();

  return useMutation({
    mutationFn: ({ email, password }: UserSignInData) =>
      signInUser({ email, password }),
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      setNickname(data.user.nickname);
      setUserId(data.user.id);
      setIsLoggedIn(true);
    },
    onError: (error) => {
      console.error("Login failed:", error);
      setAccessToken(null);
      setIsLoggedIn(false);
      setUserId(0);
    },
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: ({
      profileUrl,
      newNickname,
      userId,
      accessToken,
    }: UpdateUserData) =>
      updateUserProfile({ profileUrl, newNickname, userId, accessToken }),
  });
};
