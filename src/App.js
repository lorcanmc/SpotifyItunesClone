import css from "./App.module.css";
import { useState } from "react";
import useFetch from "./Hooks/useFetch.js";
import SideBar from "./Comp/SideBar";
import Main from "./Comp/Main";
import MusicPlayer from "./Comp/MusicPlayer";

function App() {
  const [query, setQuery] = useState("");
  const tracks = useFetch(query, 18);
  const [currentSong, setCurrentSong] = useState({});
  const [favorites, setFavorites] = useState([]);
  console.log(favorites)

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
