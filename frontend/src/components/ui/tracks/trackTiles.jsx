import { useState } from "react";

{
  /* <Link to={`/track?:id=${id}`} /> */
}

const TrackTiles = (props) => {
  // eslint-disable-next-line react/prop-types
  const { logo, name, author } = props;

  const [state, setState] = useState({ toggle: false });
  const handleClick = () => {
    setState((prevState) => (prevState.toggle = !state.toggle));
    return setState({ toggle: !state.toggle });
  };

  let styles = {
    author: "text-2xl w-[250px]",
    name: "text-3xl pl-6 w-[330px] leading-6",
    logo: "ml-1 w-[80px] h-[75px] mt-[2px] mr-6 rounded-2xl object-cover",
  };

  if (!author) {
    styles.author =
      "text-lg bg-[#4B4B4B] px-[100px] py-3 rounded-full mt-1 animate-pulse w-[250px]";
  }

  if (!logo) {
    styles.logo =
      "bg-[#4B4B4B] px-10 mr-6 rounded-2xl animate-pulse ml-1 h-[75px] mt-[2px]";
  }

  if (!name) {
    styles.name =
      "text-2xl bg-[#4B4B4B] py-4 w-[330px] animate-pulse rounded-full mt-3 ml-5";
  }

  return (
    <div className="group flex w-[600px] h-[105px] bg-black p-3 relative rounded-3xl hover:bg-[#0E0E0E] duration-300 shadow-black border border-[#090909] shadow-lg clickable">
      <img src={logo} className={styles.logo} />
      <div className="block JosefinSans text-white w-[380px]">
        <p className={styles.author}>{author}</p>
        <p className={styles.name}>{name}</p>
      </div>
      <button onClick={handleClick}>
        <img
          src={state.toggle ? "/icons/play.png" : "/icons/pause.png"}
          className="h-[70px] w-[70px] hover:scale-110 duration-200"
        />
      </button>
    </div>
  );
};

export default TrackTiles;
