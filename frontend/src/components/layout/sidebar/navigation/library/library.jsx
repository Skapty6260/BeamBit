import NavItem from "../item";
import LibItem from "./libitem";
import "./scrollbar.css";

const Lib = () => {
  return (
    <ul className="flex items-left flex-col overflow-hidden hover:overflow-y-visible h-[600px] rounded-3xl ">
      <NavItem
        logo="/icons/plus.svg"
        name="Create playlist"
        link="/new-playlist"
      />
      <div className="JosefinSans">
        <LibItem logo="/Artists/darkie_sm.jpg" name="HipHop" />
        <LibItem logo="/Artists/baby_sm.jpg" name="Dark Trap" />
      </div>
    </ul>
  );
};

export default Lib;
