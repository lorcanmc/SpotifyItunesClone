import css from "./favorites.module.css";
import TrackTableRow from "../TrackTableRow"

export default function TrackTableList({ tracks, setCurrentSong }) {
  return (
    <div >
      <h1 className={css.header}>Favorites</h1>
      <hr></hr>
      <br></br>
      <div className={css.table}>
         <TrackTableRow track={{trackName: "SONG", artistName: "ARTIST", collectionName: "ALBUM" }} />
      <hr></hr>
      {tracks.map((track, i) => {
        return <TrackTableRow track={track} setCurrentSong={setCurrentSong} />
      })}
      </div>
     

      {/* <table>
        <tbody>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Occupation</th>
          </tr>
          {tracks.map((item, i) => (
            <tr key={i}>
              <td>{item.trackName}</td>
              <td>{item.artistName}</td>
              <td>{item.collectionName}</td>
              <td>{item.Occupation}</td> 
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
