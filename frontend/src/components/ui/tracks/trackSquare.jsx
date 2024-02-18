import { useState } from "react";

const TrackSquare = (props) => {
  // eslint-disable-next-line react/prop-types
  const { logo, name, authors } = props;
  const [state, setState] = useState({ toggle: false });

  const handleClick = () => {
    console.log(state.toggle);
    return setState({ toggle: !state.toggle });
  };

  return (
    <div className="group duration-150 clickable p-4 bg-black rounded-2xl w-[180px] flex-col items-center text-ellipsis overflow-hidden hover:bg-[#0E0E0E] hover:scale-105 JosefinSans">
      <div className="flex">
        <img
          src={logo}
          className="w-[150px] h-[130px] rounded-xl object-cover relative"
          draggable="false"
        />
        <img
          onClick={handleClick}
          src={state.toggle ? "/icons/play2.png" : "/icons/pause.svg"}
          className="w-[70px] h-[70px] absolute mt-16 ml-24 hidden group-hover:flex bg-[#0E0E0E] rounded-full p-1.5 z-10 hover:scale-105"
        />
      </div>
      <div className="flex-col text-white pt-2 z-20">
        <span className="font-semibold block">{name}</span>
        <span className="text-xs text-[#8D8D8D]">{authors}</span>
      </div>
    </div>
  );
};

export default TrackSquare;
