import css from "./favorites.module.css";
import TrackTableRow from "../TrackTableRow";

export default function TrackTableList({ tracks, setCurrentSong }) {
  return (
    <div>
      <h1 className={css.header}>Favorites</h1>
      <hr></hr>
      <br></br>
      <div className={css.table}>
        <TrackTableRow
          track={{
            trackName: "SONG",
            artistName: "ARTIST",
            collectionName: "ALBUM",
          }}
        />
        <hr></hr>
        {tracks.map((track, i) => {
          return (
            <TrackTableRow track={track} setCurrentSong={setCurrentSong} />
          );
        })}
      </div>
    </div>
  );
}
