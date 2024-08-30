import { useContext } from "react";
import { GithubIcon, LinkedinIcon } from "../icons";
import ThemeContext from "../../contexts/ThemeContext";

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="z-10 mx-auto flex h-screen max-w-5xl flex-col items-center justify-center gap-7 text-center text-text">
      <h1 className="font-mono before:animate-typewriter after:animate-caret relative text-4xl font-bold before:absolute before:inset-0 before:bg-secondary after:absolute after:inset-0 after:w-[0.125em] after:bg-primary sm:text-6xl md:text-7xl lg:text-8xl">
        Oussama EL BACHIRI<span className="text-primary">.</span>
      </h1>
      <hr className="animate-fadeLeft w-3/5" />
      <h2 className="animate-fadeRight text-xl sm:text-3xl md:text-4xl lg:text-5xl">
        <span className="font-bold text-primary">Full-Stack</span> developer
      </h2>
      <hr className="animate-fadeLeft w-3/5" />
      <div className="animate-fadeUp flex flex-row gap-7">
        <a href="https://github.com/ou-sama1" target="_blank">
          <GithubIcon
            color={theme === "dark" ? "white" : "black"}
            width={"30px"}
            height={"30px"}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/oussama-el-bachiri"
          target="_blank"
        >
          <LinkedinIcon
            color={theme === "dark" ? "white" : "black"}
            width={"30px"}
            height={"30px"}
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
