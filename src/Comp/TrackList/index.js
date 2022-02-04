import react from "react";
import Track from "../Track";
const TrackList = ({ results }) => {
  console.log();
  const tracks = results.map((e) => {
    if (e.wrapperType == "track") {
      return (
        <Track
          title={e.trackName}
          artist={e.artistName}
          img={e.artworkUrl100}
          album={e.collectionName}
          audioPrev={e.previewUrl}
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
