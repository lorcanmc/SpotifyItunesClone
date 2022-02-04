import logo from "./soc-logo.svg";
import "./App.css";
import Input from "./Comp/Input/index";
import { useEffect, useState } from "react";
import TrackList from "./Comp/TrackList";
import useFetch from "./Hooks/useFetch.js";
import Header from "./Comp/Header";

function App() {
  const [query, setQuery] = useState("");
  const response = useFetch(query);

  return (
    <div className="App">
      <Header />
      <Input query={query} setQuery={setQuery} />
      <TrackList results={response} />
    </div>
  );
}

export default App;
