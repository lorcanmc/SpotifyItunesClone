import css from "./TrackTableRow.module.css"

export default function TrackTableRow({ track, setCurrentSong }) {

    function handleClick() {
        setCurrentSong(track)
      }

    return (
        <div className={css.Row} onClick={handleClick}>
            
              <div className={css.song}>{track.trackName}</div>
              <div className={css.artist}>{track.artistName}</div>
              <div className={css.album}>{track.collectionName}</div>
              {/* <div className={css.Row}>{track.Occupation}</div>  */}
           
        </div>
    )
}