import { useInView } from "react-intersection-observer";
import {
  BootstrapIcon,
  CssIcon,
  ExpressIcon,
  FigmaIcon,
  GithubIcon,
  HtmlIcon,
  JavascriptIcon,
  LaravelIcon,
  MongoIcon,
  MysqlIcon,
  NodeIcon,
  PhpIcon,
  PostmanIcon,
  PythonIcon,
  ReactIcon,
  SqliteIcon,
  TailwindIcon,
} from "../icons";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const SkillsSection = () => {
  const { theme } = useContext(ThemeContext);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skills = [
    {
      id: 0,
      type: "Frontend",
      acquired: [
        <HtmlIcon width={"60px"} height={"60px"} />,
        <CssIcon width={"60px"} height={"60px"} />,
        <JavascriptIcon width={"60px"} height={"60px"} />,
        <BootstrapIcon width={"60px"} height={"60px"} />,
        <TailwindIcon width={"60px"} height={"60px"} />,
        <ReactIcon width={"60px"} height={"60px"} />,
      ],
    },
    {
      id: 1,
      type: "Backend",
      acquired: [
        <LaravelIcon width={"60px"} height={"60px"} />,
        <ExpressIcon width={"60px"} height={"60px"} />,
        <NodeIcon width={"60px"} height={"60px"} />,
      ],
    },
    {
      id: 2,
      type: "Database",
      acquired: [
        <MysqlIcon width={"60px"} height={"60px"} />,
        <SqliteIcon width={"60px"} height={"60px"} />,
        <MongoIcon width={"60px"} height={"60px"} />,
      ],
    },
    {
      id: 3,
      type: "Languages",
      acquired: [
        <PythonIcon width={"60px"} height={"60px"} />,
        <PhpIcon width={"60px"} height={"60px"} />,
        <JavascriptIcon width={"60px"} height={"60px"} />,
      ],
    },
    {
      id: 4,
      type: "Tools",
      acquired: [
        <GithubIcon
          width={"60px"}
          height={"60px"}
          color={theme === "dark" ? "white" : "black"}
        />,
        <PostmanIcon width={"60px"} height={"60px"} />,
        <FigmaIcon width={"60px"} height={"60px"} />,
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-16 px-5 py-24 text-center text-text md:py-0"
    >
      <h2
        className={`text-4xl font-bold text-text md:text-5xl ${inView ? "animate-fadeLeft opacity-100" : "opacity-0"}`}
      >
        <span className="text-primary">$ </span>
        My skills
      </h2>
      <ul
        ref={ref}
        className="grid w-full grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map(({ id, type, acquired }) => (
          <li
            key={id}
            className={`flex w-80 flex-col items-center justify-center gap-5 rounded-lg border p-5 md:w-full ${inView ? "animate-fadeUp opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-bold text-text">
              <span className="text-primary">//</span> {type}
            </h3>
            <ul className="flex h-auto w-full flex-row flex-wrap justify-center gap-10 md:h-48">
              {acquired.map((icon, i) => (
                <li key={i} className="cursor-pointer">
                  {icon}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
