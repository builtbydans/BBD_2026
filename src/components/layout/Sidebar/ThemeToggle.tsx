import { useState } from "react";
import { SunMedium, MoonStar } from "lucide-react";

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  return stored === "dark";
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  const toggle = () => {
    const html = document.documentElement;
    const next = !isDark;

    if (next) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setIsDark(next);
  };

  return (
    <button onClick={toggle}>{isDark ? <SunMedium /> : <MoonStar />}</button>
  );
};

export default ThemeToggle;
