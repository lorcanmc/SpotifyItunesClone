import React from "react";
import MainWindowLinks from "../MainWindowLinks";
import TrackList from "../TrackList";
import css from "./main.module.css";

export default function Main({ tracks, setCurrentSong }) {
  return (
    <div className={css.main}>
      <MainWindowLinks />
      <TrackList tracks={tracks} setCurrentSong={setCurrentSong} />
    </div>
  );
}
