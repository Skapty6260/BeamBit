import TrackTiles from "../../../ui/tracks/trackTiles";

const RecentTiles = () => {
  return (
    <>
      <div className="flex flex-row space-x-4 mb-3">
        <TrackTiles
          logo="/Artists/travis_sm.jpg"
          author="Travis Scott"
          name="Impossible"
        />
        <TrackTiles
          logo="/Artists/kanye_sm.jpg"
          author="Kanye West"
          name="Yeezy"
        />
        <TrackTiles
          logo="/Artists/trippie_sm.jpg"
          author="Trippie Redd"
          name="The Grinch"
        />
      </div>
      <div className="flex flex-row space-x-4">
        <TrackTiles
          logo="/Artists/baby_sm.jpg"
          author="Lil Baby"
          name="We Paid"
        />
        <TrackTiles
          logo="/Artists/darkie_sm.jpg"
          author="Lil Darkie"
          name="rap music"
        />
        <TrackTiles />
      </div>
    </>
  );
};

export default RecentTiles;
