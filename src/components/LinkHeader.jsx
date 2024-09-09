import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function LinkHeader({ children, path }) {
  return (
    <Link
      to={path}
      className="hover:border-b-[1px] border-current focus:text-white active:text-white"
    >
      {children}
    </Link>
  );
}

export default LinkHeader;
