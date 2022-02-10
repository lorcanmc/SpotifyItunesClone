import React from "react";

import TrackCardList from "../TrackCardList";
import { featured } from "../../../lib/home";
// track, setCurrentSong, width, height

export default function HomeScreen({ setCurrentSong }) {
  console.log("featured", featured)
  return (
    <div>
        <h1 style={{color: "white", textAlign: "center"}}>FEATURED</h1>
        <TrackCardList tracks={featured} setCurrentSong={setCurrentSong} />
    </div>
  );

}
