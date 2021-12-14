import usePrism from "../../hooks/usePrism";
import useThemeStore, { ThemeTypes } from "../../stores/ThemeStore";

import "./Code.css";

type propTypes = {
  code: string;
  language: string;
};

const Code = ({ code, language }: propTypes): JSX.Element => {
  const theme = useThemeStore(state => state.theme);

  usePrism(theme as ThemeTypes);

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
