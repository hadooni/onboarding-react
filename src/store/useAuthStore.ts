import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AuthStore } from "../types/auth";

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      accessToken: null,
      avatar: "",
      nickname: "",
      isLoggedIn: false,
      setAccessToken: (token) => set({ accessToken: token }),
      setAvatar: (avatar) => set({ avatar }),
      setNickname: (nickname) => set({ nickname }),
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
