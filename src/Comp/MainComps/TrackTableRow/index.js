import css from "./TrackTableRow.module.css"

export default function TrackTableRow({ track }) {
    return (
        <div className={css.Row}>
            
              <div className={css.song}>{track.trackName}</div>
              <div className={css.artist}>{track.artistName}</div>
              <div className={css.album}>{track.collectionName}</div>
              {/* <div className={css.Row}>{track.Occupation}</div>  */}
           
        </div>
    )
}