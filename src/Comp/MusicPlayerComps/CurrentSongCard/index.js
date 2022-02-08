import React from "react";
import css from "./currentSongCard.module.css";

export default function CurrentSongCard({ currentSong, saveFavorite }) {


  const button = () => {
    if(currentSong.artistName) {
      return <button className={css.favoriteButton} onClick={() => saveFavorite(currentSong)}>+</button>
    } else {
      return <></>
    }
  }

  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={currentSong.artworkUrl100}
        alt={currentSong.collectionName}
      />
      <div className={css.description}>
        <p>{currentSong.trackName}</p>
        <p>{currentSong.artistName}</p>
      </div>

      {button()}
    </div>
  );
}
