import create from "zustand";

type userType =
  | { token: string; id: number; username: string; email: string }
  | undefined;

type AuthStore = {
  user: userType;
  setUser: (newUser: userType) => void;
};

const useAuthStore = create<AuthStore>(set => {
  return {
    user: undefined,
    setUser: (newUser: userType) => set({ user: newUser })
  };
});

export default useAuthStore;
