import React from "react";
import css from "./currentSongCard.module.css";

export default function CurrentSongCard({ currentSong, saveFavorite }) {
  const button = () => {
    if (currentSong.artistName) {
      return (
        <button
          className={css.favoriteButton}
          title="Add to favourites"
          onClick={() => saveFavorite(currentSong)}
        >
          +
        </button>
      );
    } else {
      return <></>;
    }
  };

  return (
   
      <div className={css.card}>
        <img
          className={css.image}
          src={currentSong.artworkUrl100}
          alt={currentSong.collectionName}
        />
        <div className={css.description}>
          <p className={css.desctext}>{currentSong.trackName}</p>
          <p className={css.desctext}>{currentSong.artistName}</p>
        </div>
        {button()}
      </div>

  );
}
