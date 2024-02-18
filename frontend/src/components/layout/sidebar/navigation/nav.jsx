import NavItem from "./item";
import Lib from "./library/library";

const Nav = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { active } = props;
  const actives = {
    home: false,
    search: false,
    lib: false,
    liked: false,
  };

  switch (active) {
    case "search":
      actives.search = true;
      break;
    case "library":
      actives.lib = true;
      break;
    case "liked":
      actives.liked = true;
      break;
    default:
      actives.home = true;
      break;
  }

  return (
    <nav className="animate-transRight">
      <div className="mb-6">
        <NavItem
          logo="/icons/home.svg"
          name="Home"
          active={actives.home}
          link="/"
        />
        <NavItem
          logo="/icons/search.svg"
          name="Search"
          active={actives.search}
          link="/search"
        />
        <NavItem
          logo="/icons/library.svg"
          name="Library"
          active={actives.lib}
          link="/library"
        />
        <NavItem
          logo="/icons/heart.svg"
          name="Liked songs"
          active={actives.liked}
          link="/favorite"
        />
      </div>

      <Lib />
    </nav>
  );
};

export default Nav;
