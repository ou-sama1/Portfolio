import { useState, useContext } from "react";
import { MoonIcon, SunIcon } from "../icons";
import ThemeContext from "../../contexts/ThemeContext";

const modes = {
  dark: {
    moon: <MoonIcon height={"30px"} width={"30px"} color={"white"} />,
    sun: <SunIcon height={"30px"} width={"30px"} color={"white"} />,
  },
  light: {
    moon: <MoonIcon height={"30px"} width={"30px"} color={"black"} />,
    sun: <SunIcon height={"30px"} width={"30px"} color={"black"} />,
  },
  active: {
    moon: (
      <MoonIcon height={"30px"} width={"30px"} color={"rgb(0, 123, 255)"} />
    ),
    sun: <SunIcon height={"30px"} width={"30px"} color={"rgb(0, 123, 255)"} />,
  },
};

const ToggleMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showModes, setShowModes] = useState(false);

  const showModesHandler = () => {
    setShowModes((prev) => !prev);
  };

  const toggleMode = (selectedMode) => {
    setShowModes(false);
    if (selectedMode === theme) return;
    localStorage.setItem("theme", selectedMode);
    document.body.classList.replace(theme, selectedMode);
    setTheme(selectedMode);
  };

  return (
    <div className="relative">
      <button onClick={showModesHandler}>
        {theme === "dark" ? modes.active.moon : modes.active.sun}
      </button>

      <div
        className={`absolute right-0 top-10 z-10 w-44 rounded-lg bg-card shadow ${showModes ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col items-start py-4">
          <li className="w-full px-2 py-2 hover:bg-secondary/50">
            <button
              onClick={() => toggleMode("dark")}
              className={`flex items-center gap-3 ${theme === "dark" ? "text-primary" : ""}`}
            >
              {theme === "dark" ? modes.active.moon : modes.light.moon}
              Dark mode
            </button>
          </li>
          <li className="w-full px-2 py-2 hover:bg-secondary/50">
            <button
              onClick={() => toggleMode("light")}
              className={`flex items-center gap-3 ${theme === "light" ? "text-primary" : ""}`}
            >
              {theme === "light" ? modes.active.sun : modes.dark.sun}
              Light mode
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToggleMode;
