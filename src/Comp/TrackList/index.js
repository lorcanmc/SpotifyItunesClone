import react from "react";
import Track from "../Track";
import "./index.css"
const TrackList = ({ results }) => {
  console.log();
  const tracks = results.map((e, index) => {
    if (e.wrapperType == "track") {
      return (
        <Track
          title={e.trackName}
          artist={e.artistName}
          img={e.artworkUrl100}
          album={e.collectionName}
          audioPrev={e.previewUrl}
          key={index}
        />
      );
    }
  });
  return (
    <div>
      <ul>{tracks}</ul>
    </div>
  );
};
export default TrackList;
