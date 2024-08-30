const PhpIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      ariaLabel="PHP"
      role="img"
      viewBox="0 0 512 512"
    >
      <rect width={width} height={height} rx="15%" fill="#777bb3" />

      <g stroke="#ffffff" strokeWidth="6">
        <path
          id="a"
          d="M155 202H97a3 3 0 0 0-3 2L67 345c0 3 3 3 3 3h30c3 0 3-2 3-2l7-35h27c42 0 63-28 68-53s1-56-50-56zm13 54c-4 19-17 27-35 27h-18l11-53h18c27 0 26 10 24 26z"
        />

        <path d="M275 311c-4 0-3-4-3-4l12-61c0-8 6-16-18-15h-18l-15 78s0 3-4 3h-29c-3 0-3-3-3-3l28-141s0-2 4-2h30c3 0 2 3 2 3l-7 34h26c36 0 45 17 42 37l-13 69s0 3-5 3z" />

        <use xlinkHref="#a" x="239" />
      </g>
    </svg>
  );
};

export default PhpIcon;
