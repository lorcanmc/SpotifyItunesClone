

import css from "./track.module.css";

const Track = ({ track, title, artist, img, album, setCurrentSong }) => {

  function handleClick() {
    setCurrentSong(track)
  }

  return (
    <div className={css.track} onClick={handleClick}>
      <img src={`${img}`} alt={album} />
      <p>{title}</p>
      <h6 className={css.artist}>{artist}</h6>
      <p>{album}</p>
    </div>
  );
};

export default Track;
