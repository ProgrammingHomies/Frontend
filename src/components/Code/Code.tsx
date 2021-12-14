import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

import "./Code.css";

type propTypes = {
  code: string;
  language: string;
};

const Code = ({ code, language }: propTypes): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre className='h-full w-full flex justify-center items-center'>
      <code
        className={`block whitespace-pre overflow-x-scroll language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default Code;
