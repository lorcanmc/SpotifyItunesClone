import React from "react";
import MainWindowLinks from "../MainWindowLinks";
import TrackCardList from "../TrackCardList";
import css from "./main.module.css";
import { Routes, Route } from "react-router-dom";
import TrackTableList from "../TrackTableList";
import TitleAndTrackCards from "../TitleAndTrackCards";
import { featured } from "../../../lib/home";

export default function Main({ tracks, setCurrentSong, favorites }) {
  return (
    <div className={css.main}>
      <MainWindowLinks />
      <Routes>
        <Route
          path="/"
          element={
            <TitleAndTrackCards title="FEATURED" tracks={featured} setCurrentSong={setCurrentSong} />
          }
        />
        <Route
          path="/genres"
          element={
            <TitleAndTrackCards title="GENRES" tracks={featured} setCurrentSong={setCurrentSong} />
          }
        />
        <Route
          path="/newreleases"
          element={
            <TitleAndTrackCards title="NEW RELEASES" tracks={featured} setCurrentSong={setCurrentSong} />
          }
        />
        <Route
          path="/discovery"
          element={
            <TitleAndTrackCards title="DISCOVERY" tracks={featured} setCurrentSong={setCurrentSong} />
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
