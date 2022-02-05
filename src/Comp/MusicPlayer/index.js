import { useEffect, useRef } from "react";
import css from "./musicplayer.module.css"

export default function MusicPlayer({ currentSong }) {
  const audioRef = useRef();

  console.log(currentSong.previewUrl);

  useEffect(() => {
    async function updateSong() {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      }
    }
    updateSong();
  }, [currentSong]);

  return (
    <div style={{ backgroundColor: "#282828", width: "100vw" }}>
      <audio className={css.audio} controls ref={audioRef}>
        <source src={currentSong.previewUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
