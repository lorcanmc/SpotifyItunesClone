import react from "react";

const Track = ({ title, artist, img, album, audioPrev, id }) => {
  return (
    <li>
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <h4>{album}</h4>
      <img src={`${img}`} />
      <audio controls>
        <source src={audioPrev} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </li>
  );
};
export default Track;
