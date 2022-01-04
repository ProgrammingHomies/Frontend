export type HeaderLinkType = {
  to: string;
  label: string;
  shouldUserSee: boolean;
};

export const HEADER_LINKS = [
  { to: "/", label: "Home", shouldUserSee: true, shouldGuestSee: true },
  {
    to: "/signup",
    label: "Sign Up",
    shouldUserSee: false,
    shouldGuestSee: true
  },
  { to: "/login", label: "Login", shouldUserSee: false, shouldGuestSee: true },
  {
    to: "/posts",
    label: "Posts",
    shouldUserSee: true,
    shouldGuestSee: false
  },
  {
    to: "/signout",
    label: "Sign Out",
    shouldUserSee: true,
    shouldGuestSee: false
  }
];
