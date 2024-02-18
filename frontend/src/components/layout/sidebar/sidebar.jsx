// import styles from "./sidebar.module.css";
// import SearchInput from "../search/search";
import SBLogo from "./logo/logo";
import Nav from "./navigation/nav";

const SideBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { page } = props;

  return (
    <aside className="h-screen text-[#b2b2b2] flex flex-col w-[256px] mt-2 sticky top-2">
      <SBLogo />
      <Nav active={page} />

      <footer className="flex-col mt-auto mb-12  ml-6">
        <a href="" className="hover:underline text-sm mr-4">
          cookies
        </a>
        <a href="" className="hover:underline text-sm">
          privacy
        </a>
      </footer>
    </aside>
  );
};

export default SideBar;
