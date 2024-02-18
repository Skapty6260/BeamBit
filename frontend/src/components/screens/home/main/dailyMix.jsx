import TrackSquare from "../../../ui/tracks/trackSquare";

const DailyMix = () => {
  return (
    <div className="">
      <div className="h-[275px] mt-8">
        <div className="flex justify-between items-end mb-[18px] text-white">
          <span className="font-bold text-2xl">🌄 Daily mixes</span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <TrackSquare
              logo="/pl1.jpg"
              name="HipHop"
              authors="Me, kendrick lamar"
            />
          </li>
          <li>
            <TrackSquare
              logo="/pl2.jpg"
              name="Daily Mix1"
              authors="Me, kendrick lamar"
            />
          </li>
          <li>
            <TrackSquare
              logo="/pl1.jpg"
              name="Travis Scott"
              authors="Me, kendrick lamar"
            />
          </li>
          <li>
            <TrackSquare
              logo="/banner.jpg"
              name="JUICE WRLD"
              authors="Me, kendrick lamar"
            />
          </li>
          <li>
            <TrackSquare
              logo="/pl1.jpg"
              name="Lil Peep"
              authors="Me, kendrick lamar"
            />
          </li>
          <li>
            <TrackSquare
              logo="/pl1.jpg"
              name="Stance"
              authors="Me, kendrick lamar"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DailyMix;
