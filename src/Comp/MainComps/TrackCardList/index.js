
import TrackCard from "../TrackCard";
import css from "./tracklist.module.css";

function TrackCardList({ tracks, setCurrentSong }) {

  return (
    <div className={css.tracklist}>
      {tracks.map((track, index) => {
        return (
          <TrackCard
            track={track}
            setCurrentSong={setCurrentSong}
            width={140}
            height={220}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default TrackCardList;
