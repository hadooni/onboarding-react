export type UserSignUpData = {
  id: string;
  password: string;
  nickname: string;
};

export type SignUpResponse = {
  message: string;
  success: boolean;
};

export type UserSignInData = {
  id: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string;
  nickname: string;
};

export type UserInfoData = {
  id: string;
  nickname: string;
  avatar: null;
  success: boolean;
};

export type UpdateUserData = {
  profileUrl: string;
  newNickname: string;
};

export type AuthStore = {
  accessToken: string | null;
  avatar: string | null;
  nickname: string;
  isLoggedIn: boolean;
  setAccessToken: (token: string | null) => void;
  setAvatar: (avatar: string | null) => void;
  setNickname: (nickname: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};
