export type UserSignUpData = {
  email: string;
  password: string;
  nickname: string;
};

export type SignUpResponse = {
  accessToken: string;
  user: {
    id: number;
    email: string;
    nickname: string;
    profileUrl: null;
  };
};

export type UserSignInData = {
  email: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
  user: {
    id: number;
    email: string;
    nickname: string;
  };
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
  userId: number;
  accessToken: string | null;
};

export type AuthStore = {
  accessToken: string | null;
  avatar: string | null;
  nickname: string;
  isLoggedIn: boolean;
  userId: number;
  setAccessToken: (token: string | null) => void;
  setAvatar: (avatar: string | null) => void;
  setNickname: (nickname: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUserId: (isLoggedIn: number) => void;
};
