import { useNavigate } from "react-router-dom";

const HistoryBtns = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    return navigate(-1);
  };

  const navigateForward = () => {
    return navigate(1);
  };

  return (
    <div className="flex text-[#969696] animate-transBottom">
      <button
        onClick={navigateBack}
        className="p-1 mr-[8px] bg-black rounded-full hover:bg-[#151515]"
      >
        <img src="/icons/chevron-left.svg" />
      </button>
      <button
        onClick={navigateForward}
        className="p-1 mr-[6px] bg-black rounded-full hover:bg-[#151515]"
      >
        <img src="/icons/chevron-right.svg" />
      </button>
    </div>
  );
};

export default HistoryBtns;
