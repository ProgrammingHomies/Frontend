import create from "zustand";
import { persist } from "zustand/middleware";

type userType = { token: string; id: number; username: string; email: string };

type AuthStore = {
  user: userType | undefined;
  setUser: (newUser: userType) => void;
};

export const useAuthStore = create(
  persist(
    (set, get) => ({
      // @ts-ignore
      user: get()?.user,
      setUser: (newUser: userType) => {
        set({ user: newUser });
      }
    }),
    {
      name: "userStore"
    }
  )
);

export default useAuthStore;
