export type HeaderLinkType = {
  to: string;
  label: string;
  shouldUserSee: boolean;
};

export const HEADER_LINKS = [
  { to: "/", label: "Home", shouldUserSee: true },
  { to: "/signup", label: "Sign Up", shouldUserSee: false },
  { to: "/login", label: "Login", shouldUserSee: false }
];
