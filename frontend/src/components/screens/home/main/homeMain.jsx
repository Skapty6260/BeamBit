import RecentPlayed from "./RecentPlayed";
import DailyMix from "./dailyMix";
import RecentTiles from "./recentTiles";

const HomeMain = () => {
  return (
    <main className=" bg-[#0a0a0a] h-full z-0 relative rounded-3xl ">
      <div className="w-full flex items-center -top-9 px-0 pb-8 relative">
        <img
          src="./banner3.jpeg"
          className="mx-auto w-full h-[360px] object-cover object-center rounded-3xl brightness-80 shadow-[#3E2A43] shadow-2xl"
          draggable="false"
        />
        <span className="absolute bottom-16 right-10 text-white font-semibold bg-[#151515] shadow-white shadow-md bg-opacity-35 p-2 rounded-xl clickable hover:animate-pulse">
          ⓘ Advertisement
        </span>
      </div>

      <div className="px-8 last:pb-12 mt-3">
        <div className="flex flex-col">
          <h2 className=" text-white font-bold text-2xl mb-6">
            🌆 Добрый вечер
          </h2>
          <RecentTiles />
          <RecentPlayed />
          <DailyMix />
        </div>
      </div>
    </main>
  );
};

export default HomeMain;
