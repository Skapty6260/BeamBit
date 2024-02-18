import TrackSquare from "../../../ui/tracks/trackSquare";

const RecentPlayed = () => {
  return (
    <div className="">
      <div className="h-[275px] mt-8">
        <div className="flex justify-between items-end mb-[18px] text-white">
          <span className="font-bold text-2xl">⌛ Recently played</span>
          <a href="" className="hover:underline opacity-90">
            See all
          </a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <TrackSquare
              logo="/Artists/darkie_sm.jpg"
              name="HipHop"
              authors="Lil Darkie, Kendrick Lamar"
            />
          </li>
          <li>
            <TrackSquare
              logo="/Artists/thxsomch.jpg"
              name="Hentai sounds 24h"
              authors="IVOXYGEN"
            />
          </li>
          <li>
            <TrackSquare
              logo="/Artists/travis_sm.jpg"
              name="Travis Scott"
              authors="Me, kendrick lamar"
            />
          </li>
          <li>
            <TrackSquare
              logo="/banner.jpg"
              name="Top Juice!"
              authors="JUICE WRLD"
            />
          </li>
          <li>
            <TrackSquare
              logo="/Artists/peep_sm.jpg"
              name="Lil Peep"
              authors="Lil Peep, Lil Tracy"
            />
          </li>
          <li>
            <TrackSquare
              logo="/Artists/x_sm.jpg"
              name="XXXTentacion"
              authors="XXXTentacion and others."
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentPlayed;
