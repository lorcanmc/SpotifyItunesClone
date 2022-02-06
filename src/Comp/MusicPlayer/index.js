import { useEffect, useRef } from "react";
import css from "./musicplayer.module.css";
import CurrentSongCard from "../CurrentSongCard";

export default function MusicPlayer({ currentSong, saveFavorite }) {
  const audioRef = useRef();

  useEffect(() => {
    async function updateSong() {
      if (audioRef.current && currentSong.previewUrl) {
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      }
    }
    updateSong();
  }, [currentSong]);

  return (
    <div
      className={css.musicPlayer}
      style={{ backgroundColor: "#282828", width: "100vw" }}
    >
      <CurrentSongCard currentSong={currentSong} saveFavorite={saveFavorite} />

      <audio className={css.audio} controls ref={audioRef}>
        <source src={currentSong.previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
