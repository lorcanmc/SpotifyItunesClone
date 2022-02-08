import React from "react";
import MainWindowLinks from "../MainWindowLinks";
import TrackList from "../TrackList";
import css from "./main.module.css";
import { Routes, Route } from "react-router-dom";
import Favorites from "../Favorites";

export default function Main({ tracks, setCurrentSong, favorites }) {
  return (
    <div className={css.main}>
      <MainWindowLinks />
      <Routes>
        <Route
          path="/"
          element={
            <TrackList tracks={tracks} setCurrentSong={setCurrentSong} />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
      </Routes>
    </div>
  );
}
