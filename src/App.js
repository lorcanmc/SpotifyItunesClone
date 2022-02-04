import logo from "./soc-logo.svg";
import "./App.css";
import Input from "./Comp/Input/index";
import { useEffect, useState } from "react";
import TrackList from "./Comp/TrackList";
import useFetch from "./Hooks/useFetch.js";

function App() {
  const [query, setQuery] = useState("");
  const response = useFetch(query);

  // useEffect(() => {
  //   const loadData = async function () {
  //     const response = await fetch(
  //       `https://itunes.apple.com/search?term=${query}&media=music&enitity=album&limit=25`
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setResults(data.results);
  //   };
  //   loadData();
  // }, [query]);

  return (
    <div className="App">
      <Input query={query} setQuery={setQuery} />
      <TrackList results={response} />
    </div>
  );
}

export default App;
