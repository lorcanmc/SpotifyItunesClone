import css from "./favorites.module.css";

export default function Favorites({ favorites }) {
  return (
    <div>
      <h1>Favorites</h1>
      <hr></hr>
      <br></br>
      <table>
        <tbody>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            {/* <th>Occupation</th> */}
          </tr>
          {favorites.map((item, i) => (
            <tr key={i}>
              <td>{item.trackName}</td>
              <td>{item.artistName}</td>
              <td>{item.collectionName}</td>
              {/* <td>{item.Occupation}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
