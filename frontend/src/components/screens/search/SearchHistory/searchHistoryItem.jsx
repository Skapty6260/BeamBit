const SearchHistoryItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { logo, name, authors } = props;

  return (
    <div className="duration-150 clickable p-4 bg-[#151515] rounded-2xl w-[180px] flex-col items-center text-ellipsis overflow-hidden hover:bg-[#1e1e1e] hover:scale-105">
      <a href="" className="group flex">
        <img
          src={logo}
          className="w-[150px] h-[130px] rounded-xl object-cover relative"
          draggable="false"
        />
        <img
          src="/icons/play.png"
          className="w-[60px] h-[60px] absolute mt-24 ml-20 group-hover:visible hidden "
        />
      </a>
      <div className="flex-col text-white pt-2">
        <span className="font-semibold block">{name}</span>
        <span className="text-xs text-[#8D8D8D]">{authors}</span>
      </div>
    </div>
  );
};

export default SearchHistoryItem;
