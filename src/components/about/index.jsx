import { useInView } from "react-intersection-observer";
import profilePicture from "../../assets/profile.jpg";
const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <section
      id="about"
      className="z-10 mx-auto flex h-screen max-w-5xl flex-col items-center justify-center gap-20 px-5 text-center text-text"
    >
      <h2
        className={`text-4xl font-bold text-text md:text-5xl ${inView ? "animate-fadeLeft opacity-100" : "opacity-0"}`}
      >
        <span className="text-primary">$ </span>
        About me
      </h2>
      <div
        ref={ref}
        className="flex flex-col items-center gap-10 md:flex-row md:items-stretch"
      >
        <img
          src={profilePicture}
          alt="profile picture"
          className={`h-56 w-56 rounded-full object-cover md:h-auto md:w-44 md:rounded-lg lg:w-56 ${inView ? "animate-fadeRight opacity-100" : "opacity-0"}`}
        />
        <div
          className={`flex flex-col items-center justify-between gap-5 md:items-start ${inView ? "animate-fadeUp opacity-100" : "opacity-0"}`}
        >
          <p className="text-center text-lg text-text md:text-start md:text-xl lg:text-2xl">
            &ldquo; Im <span className="font-bold text-primary">Oussama</span>,
            a Full-Stack developer and a freelancer from Morocco, I developed
            web sites using React, Laravel, Express and more, i have also
            written python scripts for automation or scraping. I am very
            enthusiastic about how things work and how to solve problems using
            code. &rdquo;
          </p>
          <button className="rounded-lg border border-primary px-10 py-4 text-sm font-bold text-primary transition hover:bg-primary hover:text-white md:text-lg">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
