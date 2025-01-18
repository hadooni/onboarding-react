import {
  SignUpResponse,
  UserSignUpData,
  UserSignInData,
  SignInResponse,
  UserInfoData,
  UpdateUserData,
} from "../types/auth";
import { baseInstance } from "./axiosInstance";

export const signUpUser = async ({
  id,
  password,
  nickname,
}: UserSignUpData): Promise<SignUpResponse> => {
  const { data } = await baseInstance.post("/register", {
    id,
    password,
    nickname,
  });
  return data;
};

export const signInUser = async ({
  id,
  password,
}: UserSignInData): Promise<SignInResponse> => {
  const { data } = await baseInstance.post(
    "/login",
    {
      id,
      password,
    },
    { params: { expiresIn: "10m" } }
  );
  return data;
};

export const getUserInfo = async (): Promise<UserInfoData> => {
  const { data } = await baseInstance.get("/user", {
    headers: {
      Authorization: "Bearer AccessToken",
    },
  });
  return data;
};

export const updateUserProfile = async ({
  profileUrl,
  newNickname,
}: UpdateUserData) => {
  await baseInstance.patch(
    "/profile",
    {
      avatar: profileUrl,
      nickname: newNickname,
    },
    {
      headers: {
        Authorization: "Bearer AccessToken",
      },
    }
  );
};
