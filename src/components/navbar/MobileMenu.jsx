import ToggleMode from "./ToggleMode";

const MobileMenu = ({ expand, animation, closeMobileMenu }) => {
  return (
    <div
      className={`${expand ? "block" : "hidden"} absolute right-0 top-0 h-screen w-full overflow-hidden py-10 md:hidden`}
    >
      <div
        onClick={closeMobileMenu}
        className="absolute right-0 top-0 z-30 h-full w-full gap-10 bg-card py-10 opacity-50"
      ></div>
      <ul
        className={`${animation === "openMenu" ? "animate-openMenu" : ""} ${animation === "closeMenu" ? "animate-closeMenu" : ""} absolute right-0 top-0 z-40 flex h-full w-2/3 min-w-52 flex-col items-center justify-center gap-10 bg-card py-10`}
      >
        <li className="text-xl font-thin transition hover:text-primary">
          <button onClick={closeMobileMenu}>X</button>
        </li>
        <li className="transition hover:text-primary">
          <a href="">Home</a>
        </li>
        <li className="transition hover:text-primary">
          <a href="">About</a>
        </li>
        <li className="transition hover:text-primary">
          <a href="">Skills</a>
        </li>
        <li className="transition hover:text-primary">
          <a href="">Projects</a>
        </li>
        <li className="transition hover:text-primary">
          <a href="">Contact</a>
        </li>
        <li>
          <ToggleMode />
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
