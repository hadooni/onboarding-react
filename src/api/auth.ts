import {
  SignUpResponse,
  UserSignUpData,
  UserSignInData,
  SignInResponse,
  UpdateUserData,
} from "../types/auth";
import { jsonServerInstance } from "./axiosInstance";

export const signUpUser = async ({
  email,
  password,
  nickname,
}: UserSignUpData): Promise<SignUpResponse> => {
  const { data } = await jsonServerInstance.post("/register", {
    email,
    password,
    nickname,
    profileUrl: null,
  });
  return data;
};

export const signInUser = async ({
  email,
  password,
}: UserSignInData): Promise<SignInResponse> => {
  const { data } = await jsonServerInstance.post(
    "/login",
    {
      email,
      password,
    },
    { params: { expiresIn: "10m" } }
  );
  return data;
};

export const updateUserProfile = async ({
  profileUrl,
  newNickname,
  userId,
  accessToken,
}: UpdateUserData) => {
  await jsonServerInstance.patch(
    `/600/users/${userId}`,
    {
      profileUrl,
      nickname: newNickname,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
