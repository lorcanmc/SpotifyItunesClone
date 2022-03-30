import css from "./track.module.css";

const TrackCard = ({ track, setCurrentSong, width, height }) => {

  const {trackName, artistName, artworkUrl100, collectionName} =  track;

  function handleClick() {
    setCurrentSong(track);
  }

  return (
    <div
      className={css.track}
      style={{ width: `80%`, height: `85%`}}
      onClick={handleClick}
    >
    <div className={css.trim} style={{maxHeight: `${height - 65}px`}} >
      <img className={css.image} src={`${artworkUrl100}`} alt={collectionName} />
    </div>
      
      <p>{trackName}</p>
      <h6 className={css.artist}>{artistName}</h6>
      <p>{collectionName}</p>
    </div>
  );
};

export default TrackCard;
