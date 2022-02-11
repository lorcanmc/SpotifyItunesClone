import React from "react";

import TrackCardList from "../TrackCardList";

// track, setCurrentSong, width, height

export default function TitleAndTrackCards({ setCurrentSong, title, tracks }) {
  return (
    <div>
        <h1 style={{color: "white", textAlign: "center"}}>{title}</h1>
        <TrackCardList tracks={tracks} setCurrentSong={setCurrentSong} />
    </div>
  );

}
