
import Track from "../Track";
import css from "./tracklist.module.css";

console.log("we")
const TrackList = ({ tracks, setCurrentSong }) => {
  return (
    <div className={css.tracklist}>
      {tracks.map((e, index) => {
        return (
          <Track
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
export default TrackList;
