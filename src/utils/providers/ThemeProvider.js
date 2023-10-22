import { ThemeContext } from "../contexts";
import { useState } from "react";
import { Theme } from "../config/";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Theme.dark);
  const switchTheme = () => {
    setTheme((curr) => (curr === Theme.dark ? Theme.light : Theme.dark));
  };
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
