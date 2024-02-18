import { AnimatedInput } from "../../ui/animatedPlaceholder";
import HeaderLayout from "../../ui/header/headerLayout";

const HeaderSearch = () => {
  return (
    <HeaderLayout
      childs={
        <div className="flex text-[#969696]">
          <div className="flex items-center">
            <img
              src="/icons/searchbl.svg"
              className="absolute ml-4 fill-black z-10"
            />
            <AnimatedInput
              placeholder="Search..."
              className="p-1.5 rounded-full pl-10 ml-2 relative focus:outline-none focus:border-gray-800 focus:border-white text-black w-[600px]"
            />
          </div>
        </div>
      }
    ></HeaderLayout>
  );
};

export default HeaderSearch;
