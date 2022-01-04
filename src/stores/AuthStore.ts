import create from "zustand";
import { persist } from "zustand/middleware";

type userType = {
  email: string;
  nickname: string | undefined;
  birthday: string | undefined;
  links:
    | {
        github: string | undefined;
        linkendin: string | undefined;
      }
    | undefined;
  bio: string | undefined;
};

type AuthStore = {
  user: userType | undefined;
  setUser: (newUser: userType) => void;
};

export const useAuthStore = create<AuthStore>(
  persist(
    (set, get) => ({
      // @ts-ignore
      user: get()?.user,
      setUser: (newUser: userType) => {
        set(state => ({
          user: newUser
        }));
      }
    }),
    {
      name: "userStore"
    }
  )
);

export default useAuthStore;
