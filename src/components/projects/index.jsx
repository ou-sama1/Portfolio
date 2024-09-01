import { useInView } from "react-intersection-observer";
import SneakersImage from ".././../assets/sneakers-project.png";
import HomehelperImage from ".././../assets/homehelper-project.png";
import { GithubIcon, NetworkIcon } from "../icons";

const projects = [
  {
    id: 0,
    image: SneakersImage,
    title: "Sneakers",
    description:
      "My first MERN stack e-commerce website, it has various features, you can singup/login, add to cart, add to favorites, filter products, send email (with captcha validation) etc... ",
    code: "https://github.com/ou-sama1/E-commerce-prototype",
    preview: "https://sneakers-y4qk.onrender.com/",
  },
  {
    id: 1,
    image: HomehelperImage,
    title: "HomeHelper",
    description:
      "A full-stack react/laravel website, Homehelper is a platform that offers all house services, acting as the middle man between a service provider and a client. \nThis project is still under construction with my team.",
    code: "https://github.com/ou-sama1/HomeHelper-Frontend",
    preview: "https://homehelper.vercel.app/",
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <section
      id="projects"
      className="z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-16 px-5 py-24 text-center text-text md:py-0"
    >
      <h2
        className={`text-4xl font-bold text-text md:text-5xl ${inView ? "animate-fadeLeft opacity-100" : "opacity-0"}`}
      >
        <span className="text-primary">$ </span>
        My projects
      </h2>
      <ul ref={ref} className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map(({ id, image, title, description, code, preview }) => (
          <li
            key={id}
            className={`flex max-w-96 flex-col items-start gap-2 overflow-hidden bg-card text-start text-text md:max-w-none ${inView ? "animate-fadeRight opacity-100" : "opacity-0"}`}
          >
            <img
              src={image}
              alt={title}
              className="z-10 cursor-pointer transition hover:scale-125"
            />
            <div className="z-20 flex flex-col gap-4 bg-card p-4">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="h-auto md:h-32">{description}</p>
              <div className="flex flex-row gap-5 self-end text-primary">
                <a
                  href={code}
                  target="_blank"
                  className="flex flex-row items-center gap-2"
                >
                  <GithubIcon
                    width={"30px"}
                    height={"30px"}
                    color={"#007BFF"}
                  />
                  Source code
                </a>
                <a
                  href={preview}
                  target="_blank"
                  className="flex flex-row items-center gap-2"
                >
                  <NetworkIcon
                    width={"30px"}
                    height={"30px"}
                    color={"#007BFF"}
                  />
                  Live preview
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
