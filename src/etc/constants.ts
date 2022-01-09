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
    to: "/myposts",
    label: "My Posts",
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

export const CODE_EXAMPLE = `function fibonacci(num) {
  if(num < 2) {
      return num;
  }
  else {
      return fibonacci(num-1) + fibonacci(num - 2);
  }
}`;

export const MOCK_DATA = [
  {
    title: "Programming Hommies",
    bio: `First paragraph.
    
    Second paragraph.
    
    Programming Homies body.`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    tags: [
      { title: "React", color: "#38bdf8" },
      { title: "Typescript", color: "#2563eb" }
    ],
    id: 1
  },
  {
    title: "Code Fellas",
    bio: `First paragraph.
    
    Second paragraph.
    
    Code Fellas body.`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    tags: [
      { title: "Vue", color: "#16a34a" },
      { title: "Javascript", color: "#fde047" }
    ],
    id: 2
  }
];
