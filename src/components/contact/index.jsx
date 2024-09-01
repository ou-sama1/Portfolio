import { useInView } from "react-intersection-observer";
import { MailIcon } from "../icons";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../contexts/ThemeContext";
const ContactSection = () => {
  const [copied, setCopied] = useState("");
  const { theme } = useContext(ThemeContext);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  useEffect(() => {
    if (copied === "") return;
    navigator.clipboard.writeText(copied);
    setTimeout(() => setCopied(""), 500);
  }, [copied]);
  return (
    <section
      id="contact"
      className="z-10 mx-auto flex h-screen max-w-5xl flex-col items-center justify-center gap-20 px-5 text-center text-text"
    >
      <h2
        className={`text-4xl font-bold text-text md:text-5xl ${inView ? "animate-fadeLeft opacity-100" : "opacity-0"}`}
      >
        <span className="text-primary">$ </span>
        Contact me
      </h2>
      <p
        ref={ref}
        className={`text-2xl md:text-3xl ${inView ? "animate-fadeRight opacity-100" : "opacity-0"}`}
      >
        If you have any questions feel free to email me.
      </p>
      <div
        className={`relative flex cursor-pointer flex-row items-center gap-5 border px-6 py-4 ${inView ? "animate-fadeUp opacity-100" : "opacity-0"}`}
      >
        <span className="border-r pr-4">
          <MailIcon
            width={"40px"}
            height={"40px"}
            color={theme === "dark" ? "white" : "black"}
          />
        </span>
        <h3 className="text-lg md:text-xl">oussama.elbachiri0@gmail.com</h3>
        <button
          onClick={() => setCopied("oussama.elbachiri0@gmail.com")}
          className={`absolute left-0 top-0 z-0 flex h-full w-full items-center justify-center text-2xl text-white opacity-0 transition hover:opacity-100 ${copied ? "bg-green-600" : "bg-primary"}`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
