import react from "react";

import css from "./track.module.css";

const Track = ({ track, title, artist, img, album, setCurrentSong }) => {

  function handleClick() {
    setCurrentSong(track)
  }

  return (
    <div className={css.track} onClick={handleClick}>
      <img src={`${img}`} alt={album} />

      <p>{title}</p>
      <p>{artist}</p>
      <p>{album}</p>
    </div>
  );
};

export default Track;
