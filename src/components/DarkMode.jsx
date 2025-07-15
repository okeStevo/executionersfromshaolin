import React, { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs"; // Sun icon
import { BsFillMoonStarsFill } from "react-icons/bs"; // Moon with stars icon

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className="text-2xl transition-all duration-300">
      {theme === "light" ? (
        <BsFillMoonStarsFill className="text-white" />
      ) : (
        <BsSunFill className="text-black" />
      )}
    </button>
  );
};

export default DarkMode;
