import React, { useState, useEffect } from "react";
import getCookie from "../../utils/getCookie";
import { ThemeContext, themes } from "contexts/ThemeContext";

export default function ThemeContextWrapper(props) {

  console.log('getCookie() colortheme', getCookie('colortheme'))
  let currentTheme = themes.dark
  const colorTheme = getCookie('colortheme')
  if(colorTheme === 'sun') {
    currentTheme = themes.light
  }
  const [theme, setTheme] = useState(() => {return currentTheme});

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add("white-content");
        break;
      case themes.dark:
      default:
        document.body.classList.remove("white-content");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
