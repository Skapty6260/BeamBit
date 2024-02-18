const LibItem = (props) => {
  /**
   * param logo (playlist logo)
   * param name (pl name)
   * param active (create music icon on pl logo) show what plays currently
   */
  // eslint-disable-next-line react/prop-types
  const { logo, name, active, createpl } = props;
  //let au = `Playlist •${author}` || "Playlist •Unknown";

  let style =
    "flex items-center hover:text-white mx-2 px-3 py-3 rounded-lg duration-300";

  if (active) {
    style =
      "flex items-center text-white mx-2 px-3 py-2 rounded-lg duration-300 active hover:scale-105 hover:mx-3";

    return (
      <a href="" className={style}>
        <div className="relative left-0 top-0">
          <img
            src={logo}
            className="w-[50px] h-[50px] object-cover object-right rounded-lg relative shadow-xl brightness-75"
          />
          <img
            src="/icons/equalizer.gif"
            className="absolute top-0 left-0 w-[60px] h-[60px]"
          />
        </div>
        <div className="inline">
          <img src="/icons/volume.svg" className="inline ml-3 top-6" />
          <span className="ml-2 text-md font-semibold align-top">{name}</span>
        </div>
      </a>
    );
  }

  if (createpl) {
    style =
      "flex items-center text-white mx-2 text-white px-2 py-5 rounded-lg duration-300 clickable hover:scale-105 hover:ml-4 hover:mb-2";

    return (
      <a className={style}>
        <img src={logo} className="clickable" />

        <a
          href=""
          className="
          text-sm
          font-semibold
          pl-2
          bg-inherit"
        >
          {name}
        </a>
      </a>
    );
  }

  return (
    <a href="" className={style}>
      <img
        src={logo}
        className="w-[50px] h-[50px] object-cover object-right rounded-lg shadow-xl"
      />
      <span className="ml-3 text-md font-semibold align-top">{name}</span>
    </a>
  );
};

export default LibItem;
