import css from "./App.module.css";
import { useState } from "react";
import useFetch from "./Hooks/useFetch.js";
import SideBar from "./Comp/SideBarComps/SideBar";
import Main from "./Comp/MainComps/Main";
import MusicPlayer from "./Comp/MusicPlayerComps/MusicPlayer";
import { dummyFavorites } from "./lib/favorites";

function App() {
  const [query, setQuery] = useState("");
  const [currentSong, setCurrentSong] = useState({});
  const [favorites, setFavorites] = useState(dummyFavorites);
  console.log(favorites)
  const tracks = useFetch(query, 18);

  function saveFavorite(song) {
    setFavorites([...favorites, song])
  }

  return (
    <div className={css.wrapper}>
      <SideBar query={query} setQuery={setQuery} />
      <Main tracks={tracks} setCurrentSong={setCurrentSong} favorites={favorites} />
      <MusicPlayer currentSong={currentSong} saveFavorite={saveFavorite} />
    </div>
  );
}

export default App;
