import React from "react";
import css from "./mainwindowlinks.module.css"

export default function MainWindowLinks() {
    
  return (
    <div className={css.mainWindowLinks}>
      <ul>
        <li>
          <a href="./">FEATURED</a>
        </li>
        <li>
          <a href="./genres">GENRES & MOODS</a>
        </li>
        <li>
          <a href="./newreleases">NEW RELEASES</a>
        </li>
        <li>
          <a href="./discovery">DISCOVERY</a>
        </li>
      </ul>
    </div>
  );
}
