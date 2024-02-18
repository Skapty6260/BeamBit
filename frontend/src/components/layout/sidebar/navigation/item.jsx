import { Link } from "react-router-dom";

const NavItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { logo, name, active, link } = props;
  let style =
    "flex w-[220px] items-center hover:text-white mx-2 px-4 py-2 rounded-lg duration-300";

  if (active) {
    style =
      "flex w-[220px] items-center hover:text-white mx-2 px-4 py-2 rounded-xl duration-300 active";
  }

  return (
    <Link to={link} className={style}>
      <img src={logo} />
      <span className="ml-4 text-sm font-semibold">{name}</span>
    </Link>
  );
};

export default NavItem;
