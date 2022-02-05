import css from "./App.module.css";
import Input from "./Comp/Input/index";
import { useEffect, useState } from "react";
import useFetch from "./Hooks/useFetch.js";
import SideBar from "./Comp/SideBar";
import Main from "./Comp/Main";
import MusicPlayer from "./Comp/MusicPlayer";

function App() {
  const [query, setQuery] = useState("");
  const tracks = useFetch(query, 18);
  const [currentSong, setCurrentSong] = useState({});

  return (
    <div className={css.wrapper}>
      <SideBar query={query} setQuery={setQuery} />
      <Main tracks={tracks} setCurrentSong={setCurrentSong} />
      <MusicPlayer currentSong={currentSong} />
    </div>
  );
}

export default App;
