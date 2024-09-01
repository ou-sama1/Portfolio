import { useContext } from "react";
import { useInView } from "react-intersection-observer";

import { GithubIcon, LinkedinIcon } from "../icons";
import ThemeContext from "../../contexts/ThemeContext";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="hero"
      className="z-10 mx-auto flex h-screen max-w-5xl flex-col items-center justify-center gap-7 text-center text-text"
    >
      <h1
        ref={ref}
        className={`font-mono relative text-4xl font-bold before:absolute before:inset-0 before:bg-secondary after:absolute after:inset-0 after:w-[0.125em] after:bg-primary sm:text-6xl md:text-7xl lg:text-8xl ${inView ? "before:animate-typewriter after:animate-caret" : ""}`}
      >
        Oussama EL BACHIRI<span className="text-primary">.</span>
      </h1>
      <hr className={`w-3/5 ${inView ? "animate-fadeLeft opacity-100" : "opacity-0"}`} />
      <h2
        className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl ${inView ? "animate-fadeRight opacity-100" : "opacity-0"}`}
      >
        <span className="font-bold text-primary">Full-Stack</span> developer
      </h2>
      <hr className={`w-3/5 ${inView ? "animate-fadeLeft opacity-100" : "opacity-0"}`} />
      <div className={`flex flex-row gap-7 ${inView ? "animate-fadeUp opacity-100" : "opacity-0"}`}>
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
