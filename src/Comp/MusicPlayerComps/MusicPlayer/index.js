import { useEffect, useRef } from "react";
import css from "./musicplayer.module.css";
import CurrentSongCard from "../CurrentSongCard";

export default function MusicPlayer({ currentSong, saveFavorite }) {
  const audioRef = useRef();

  useEffect(() => {
    async function updateSong() {
      if (audioRef.current && currentSong && currentSong.previewUrl) {
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      }
    }
    updateSong();
  }, [currentSong]);

  return (
    <div className={css.musicPlayer}>
      <div className={css.sideSection}>
        <CurrentSongCard
          currentSong={currentSong}
          saveFavorite={saveFavorite}
        />
      </div>
      <div className={css.centreSection}>
        <audio className={css.audio} controls ref={audioRef}>
          {currentSong && (
            <source src={currentSong.previewUrl} type="audio/mpeg" />
          )}
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className={css.sideSection}></div>
    </div>
  );
}
