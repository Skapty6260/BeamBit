import LoginBTNS from "./loginButtons";
import HistoryBtns from "./navigation";

const HeaderLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { childs } = props;
  return (
    <header className="bg-black bg-opacity-75 flex-1 z-50 flex items-center py-[12px] px-[32px] justify-between sticky top-0 -mb-6 shadow-2xl animate-opacity01">
      <div className="flex">
        <HistoryBtns />
        {childs}
      </div>
      <LoginBTNS />
    </header>
  );
};

export default HeaderLayout;
