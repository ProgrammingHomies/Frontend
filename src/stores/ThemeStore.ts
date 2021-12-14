import create from "zustand";

export type ThemeTypes = "light" | "dark";

const useThemeStore = create(set => ({
  theme: "light",
  toggle: (theme: ThemeTypes) => {
    if (theme === "light") {
      return "dark";
    } else {
      return "light;";
    }
  }
}));

export default useThemeStore;
