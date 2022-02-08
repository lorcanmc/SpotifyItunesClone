
import TrackCard from "../TrackCard";
import css from "./tracklist.module.css";

console.log("we")
const TrackCardList = ({ tracks, setCurrentSong }) => {
  return (
    <div className={css.tracklist}>
      {tracks.map((e, index) => {
        return (
          <TrackCard
            track={e}
            title={e.trackName}
            artist={e.artistName}
            img={e.artworkUrl100}
            album={e.collectionName}
            audioPrev={e.previewUrl}
            setCurrentSong={setCurrentSong}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default TrackCardList;
