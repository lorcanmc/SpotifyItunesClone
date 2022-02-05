import React from "react";

export default function CurrentSongCard({ currentSong }) {
  return (
    <div style={{ width: "20%", color: "white" }}>
      <img
        style={{ margin: "10px", height: "80%" }}
        src={currentSong.artworkUrl100}
        alt={currentSong.collectionName}
      />
      <p>songName</p>
      <p>Artistname</p>
    </div>
  );
}
