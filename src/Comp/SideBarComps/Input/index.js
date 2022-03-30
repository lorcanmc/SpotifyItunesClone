import { useNavigate } from "react-router-dom";
import { useState } from "react";

import css from "./input.module.css";

const Input = ({ query, setQuery }) => {
  let navigate  = useNavigate();
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    setQuery(text.split(" ").join("+"));
    console.log(text);
    navigate('./search');

  }
  return (
    <form>
      <div className={css.search}>
        <input type="text" onChange={handleChange} placeholder="Search" />
        <button type="submit" onClick={handleClick}>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fwhite-search-icon-png-33.png&f=1&nofb=1"
            className={css.sidebarIcon}
            alt="search"
          />
        </button>
      </div>
    </form>
  );
};

export default Input;
