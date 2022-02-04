import react from "react";
import "./track.css"
const Track = ({ title, artist, img, album, audioPrev, id }) => {
  return (
    <li className="track">
      <div className="right">
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <h4>{album}</h4>

      <audio controls>
        <source src={audioPrev} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </div>
      <img src={`${img}`} />
    </li>
  );
};
export default Track;
