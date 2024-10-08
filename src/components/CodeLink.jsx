// eslint-disable-next-line react/prop-types
function CodeLink({ link }) {
  return (
    <a
      href={link}
      className="flex gap-2 text-[#9CA4A6] hover:border-b hover:border-b-[#9CA4A6]  z-10  w-fit "
      target="_blank"
    >
      <svg
        stroke="transparent"
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
      >
        <path
          d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
          fill="#9CA4A6"
        ></path>
      </svg>
      Code
    </a>
  );
}

export default CodeLink;
