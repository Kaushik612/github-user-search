import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const colorScheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorScheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorScheme]);

  return [colorScheme, setTheme];
}
