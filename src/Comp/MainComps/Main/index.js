import React from "react";
import MainWindowLinks from "../MainWindowLinks";
import TrackCardList from "../TrackCardList";
import css from "./main.module.css";
import { Routes, Route } from "react-router-dom";
import TrackTableList from "../TrackTableList";

export default function Main({ tracks, setCurrentSong, favorites }) {
  return (
    <div className={css.main}>
      <MainWindowLinks />
      <Routes>
        <Route
          path="/"
          element={
            <TrackCardList tracks={tracks} setCurrentSong={setCurrentSong} />
          }
        />
        <Route
          path="/favorites"
          element={<TrackTableList tracks={favorites} />}
        />
      </Routes>
    </div>
  );
}
