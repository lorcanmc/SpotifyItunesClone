import React from "react";
import MainWindowLinks from "../MainWindowLinks";
import TrackCardList from "../TrackCardList";
import css from "./main.module.css";
import { Routes, Route } from "react-router-dom";
import TrackTableList from "../TrackTableList";
import HomeScreen from "../HomeScreen";

export default function Main({ tracks, setCurrentSong, favorites }) {
  return (
    <div className={css.main}>
      <MainWindowLinks />
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen setCurrentSong={setCurrentSong} />
          }
        />
        <Route
          path="/search"
          element={<TrackCardList tracks={tracks} setCurrentSong={setCurrentSong} />}
        />
        <Route
          path="/favorites"
          element={<TrackTableList tracks={favorites} setCurrentSong={setCurrentSong} />}
        />
      </Routes>
    </div>
  );
}
