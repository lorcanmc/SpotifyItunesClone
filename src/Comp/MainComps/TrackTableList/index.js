import css from "./favorites.module.css";
import TrackTableRow from "../TrackTableRow";

export default function TrackTableList({ tracks, setCurrentSong }) {
  return (
    <div>
      <h1 className={css.header}>Your Favorites</h1>
      <hr></hr>
      <br></br>
      <div className={css.table}>
        <TrackTableRow
        num="#"
          track={{
            trackName: "SONG",
            artistName: "ARTIST",
            collectionName: "ALBUM",
          }}
        />
        <hr></hr>
        {tracks.map((track, i) => {
          return (
            <TrackTableRow key={i} num={i+1} track={track} setCurrentSong={setCurrentSong} />
          );
        })}
      </div>
    </div>
  );
}
