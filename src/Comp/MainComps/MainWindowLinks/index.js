import React from "react";
import { Link } from "react-router-dom";

import css from "./mainwindowlinks.module.css";

export default function MainWindowLinks() {
  return (
    <div className={css.mainWindowLinks}>
      <ul>
        <li>
          <Link to="/">
            <p>FEATURED</p>
          </Link>
        </li>
        <li>
          <Link to="/genres">
            <p>GENRES & MOODS</p>
          </Link>
        </li>
        <li>
          <Link to="/newreleases">
            <p>NEW RELEASES</p>
          </Link>
        </li>
        <li>
          <Link to="/discovery">
            <p>DISCOVERY</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
