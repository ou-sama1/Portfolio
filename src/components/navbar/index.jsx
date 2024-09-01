import { useState } from "react";

import { HamburgerIcon } from "../icons";
import MobileMenu from "./MobileMenu";
import ToggleMode from "./ToggleMode";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const [animation, setAnimation] = useState("");

  const openMobileMenu = () => {
    setAnimation("openMenu");
    setExpand(true);
  };
  const closeMobileMenu = () => {
    setAnimation("closeMenu");
    const timer = setTimeout(() => setExpand(false), 250);
  };

  return (
    <header className="fixed top-0 z-50 w-full px-10 backdrop-blur-md h-28">
      <nav className="mx-auto flex w-full max-w-5xl flex-row items-center justify-between py-10 text-text">
        <span className="text-3xl font-extrabold">
          OE<span className="text-primary">.</span>
        </span>
        <ul className="hidden flex-row gap-10 text-lg md:flex">
          <li className="transition hover:text-primary">
            <a href="#hero">Home</a>
          </li>
          <li className="transition hover:text-primary">
            <a href="#about">About</a>
          </li>
          <li className="transition hover:text-primary">
            <a href="#skills">Skills</a>
          </li>
          <li className="transition hover:text-primary">
            <a href="#projects">Projects</a>
          </li>
          <li className="transition hover:text-primary">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="hidden md:block">
          <ToggleMode />
        </div>
        <button
          onClick={openMobileMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        >
          <HamburgerIcon />
        </button>
        <MobileMenu
          animation={animation}
          expand={expand}
          closeMobileMenu={closeMobileMenu}
        />
      </nav>
    </header>
  );
};

export default Navbar;
