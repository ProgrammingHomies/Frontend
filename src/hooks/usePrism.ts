import Prism from "prismjs";
import { useEffect } from "react";
import { ThemeTypes } from "../stores/ThemeStore";

const usePrism = (theme: ThemeTypes) => {
  useEffect(() => {
    if (theme === "light") {
      require("prismjs/themes/prism.css");
    } else {
      require("prismjs/themes/prism-dark.css");
    }
    Prism.highlightAll();
  }, [theme]);
};

export default usePrism;
