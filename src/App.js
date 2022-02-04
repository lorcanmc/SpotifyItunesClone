import logo from "./soc-logo.svg";
import "./App.css";

import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const loadData = async function () {
  //   const response = await fetch(API_URL);
  //   const data = await response.json();
  //   setRecipes(data);
  //   console.log(data);
  // };
  //   loadData();
  // }, [query]);

  useEffect(() => {
    const loadData = async function () {
      const response = await fetch("https://itunes.apple.com/search?term=adele&enitity=album&limit=25");
      const data = await response.json();
      console.log(data);
    };
    loadData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hackathon Friday</p>
      </header>
    </div>
  );
}

export default App;
