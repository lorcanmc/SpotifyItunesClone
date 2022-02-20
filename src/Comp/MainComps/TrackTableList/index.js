import css from "./favorites.module.css";
import TrackTableRow from "../TrackTableRow";
import { useState } from "react";

export default function TrackTableList({ tracks, setTracks, setCurrentSong }) {
  const [currentSortField, setCurrentSortField] = useState("");

  function handleClick(sortField) {
    if (sortField === currentSortField) {
      const rev = tracks.slice().reverse()
      setTracks(rev);
    } else {
      tracks.sort((a, b) => {
        const textA = a[sortField].toUpperCase();
        const textB = b[sortField].toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setCurrentSortField(sortField);
    }
  }

  return (
    <div>
      <h1 className={css.heading}>Your Favorites</h1>
      <hr></hr>
      <br></br>
      <div className={css.table}>
        <div className={css.rowHeaders}>
          <div className={`${css.num} ${css.rowHeader}`}>#</div>
          <div
            className={`${css.song} ${css.rowHeader}`}
            onClick={() => handleClick("trackName")}
          >
            Song
          </div>
          <div
            className={`${css.artist} ${css.rowHeader}`}
            onClick={() => handleClick("artistName")}
          >
            Artist
          </div>
          <div
            className={`${css.album} ${css.rowHeader}`}
            onClick={() => handleClick("collectionName")}
          >
            Album
          </div>
        </div>
        <hr></hr>
        {tracks.map((track, i) => {
          return (
            <TrackTableRow
              key={i}
              num={i + 1}
              track={track}
              setCurrentSong={setCurrentSong}
            />
          );
        })}
      </div>
    </div>
  );
}
