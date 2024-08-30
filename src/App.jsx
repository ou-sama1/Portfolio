import { useEffect, useState } from "react";

import { HeroSection, Navbar } from "./components";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      setTheme(selectedTheme);
      document.body.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.add("light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <main className="relative">
        <Navbar />
        <HeroSection />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
