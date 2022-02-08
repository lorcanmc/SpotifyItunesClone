import css from "./App.module.css";
import { useState } from "react";
import useFetch from "./Hooks/useFetch.js";
import SideBar from "./Comp/SideBarComps/SideBar";
import Main from "./Comp/MainComps/Main";
import MusicPlayer from "./Comp/MusicPlayerComps/MusicPlayer";

const dummyFavorites = [{"wrapperType":"track","kind":"song","artistId":262836961,"collectionId":1544494115,"trackId":1544494392,"artistName":"Adele","collectionName":"25","trackName":"Hello","collectionCensoredName":"25","trackCensoredName":"Hello","artistViewUrl":"https://music.apple.com/us/artist/adele/262836961?uo=4","collectionViewUrl":"https://music.apple.com/us/album/hello/1544494115?i=1544494392&uo=4","trackViewUrl":"https://music.apple.com/us/album/hello/1544494115?i=1544494392&uo=4","previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e8/28/29/e828299c-cea7-dd3e-8612-77a632bd60e3/mzaf_7797752939119995161.plus.aac.p.m4a","artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e6/da/e9/e6dae950-3b74-8df4-b40a-dba4161bf067/source/30x30bb.jpg","artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e6/da/e9/e6dae950-3b74-8df4-b40a-dba4161bf067/source/60x60bb.jpg","artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e6/da/e9/e6dae950-3b74-8df4-b40a-dba4161bf067/source/100x100bb.jpg","collectionPrice":10.99,"trackPrice":1.29,"releaseDate":"2015-10-23T07:00:00Z","collectionExplicitness":"notExplicit","trackExplicitness":"notExplicit","discCount":1,"discNumber":1,"trackCount":11,"trackNumber":1,"trackTimeMillis":295502,"country":"USA","currency":"USD","primaryGenreName":"Pop","isStreamable":true},{"wrapperType":"track","kind":"song","artistId":262836961,"collectionId":1544494115,"trackId":1544494912,"artistName":"Adele","collectionName":"25","trackName":"All I Ask","collectionCensoredName":"25","trackCensoredName":"All I Ask","artistViewUrl":"https://music.apple.com/us/artist/adele/262836961?uo=4","collectionViewUrl":"https://music.apple.com/us/album/all-i-ask/1544494115?i=1544494912&uo=4","trackViewUrl":"https://music.apple.com/us/album/all-i-ask/1544494115?i=1544494912&uo=4","previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c6/65/e6/c665e69e-865d-2014-fdc1-4c86a3cc387b/mzaf_4526614397375342710.plus.aac.p.m4a","artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e6/da/e9/e6dae950-3b74-8df4-b40a-dba4161bf067/source/30x30bb.jpg","artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e6/da/e9/e6dae950-3b74-8df4-b40a-dba4161bf067/source/60x60bb.jpg","artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e6/da/e9/e6dae950-3b74-8df4-b40a-dba4161bf067/source/100x100bb.jpg","collectionPrice":10.99,"trackPrice":1.29,"releaseDate":"2015-11-20T12:00:00Z","collectionExplicitness":"notExplicit","trackExplicitness":"notExplicit","discCount":1,"discNumber":1,"trackCount":11,"trackNumber":10,"trackTimeMillis":271800,"country":"USA","currency":"USD","primaryGenreName":"Pop","isStreamable":true},{"wrapperType":"track","kind":"song","artistId":262836961,"collectionId":1544494115,"trackId":1544494905,"artistName":"Adele","collectionName":"25","trackName":"Million Years Ago","collectionCensoredName":"25","trackCensoredName":"Million Years Ago","artistViewUrl":"https://music.apple.com/us/artist/adele/262836961?uo=4","collectionViewUrl":"https://music.apple.com/us/album/million-years-ago/1544494115?i=1544494905&uo=4","trackViewUrl":"https://music.apple.com/us/album/million-years-ago/1544494115?i=1544494905&uo=4","previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c3/58/4e/c3584ead-31fa-f94c-a6fc-f1c60bf9ab1b/mzaf_9959656395244860758.plus.aac.p.m4a","artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e6/da/e9/e6dae950-3b74-8df4-b40a-dba4161bf067/source/30x30bb.jpg","artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e6/da/e9/e6dae950-3b74-8df4-b40a-dba4161bf067/source/60x60bb.jpg","artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e6/da/e9/e6dae950-3b74-8df4-b40a-dba4161bf067/source/100x100bb.jpg","collectionPrice":10.99,"trackPrice":1.29,"releaseDate":"2015-11-20T12:00:00Z","collectionExplicitness":"notExplicit","trackExplicitness":"notExplicit","discCount":1,"discNumber":1,"trackCount":11,"trackNumber":9,"trackTimeMillis":227066,"country":"USA","currency":"USD","primaryGenreName":"Pop","isStreamable":true}]

function App() {
  const [query, setQuery] = useState("");
  const [currentSong, setCurrentSong] = useState({});
  const [favorites, setFavorites] = useState(dummyFavorites);

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
