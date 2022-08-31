import React from "react";
import css from "./currentSongCard.module.css";

export default function CurrentSongCard({ currentSong, saveFavorite }) {

  return currentSong && (
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
      <button
        className={css.favoriteButton}
        title="Add to favourites"
        onClick={() => saveFavorite(currentSong)}
      >
        +
      </button>
    </div>
  );
}
