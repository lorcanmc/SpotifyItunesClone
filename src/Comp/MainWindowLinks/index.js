import React from "react";
import css from "./mainwindowlinks.module.css"

export default function MainWindowLinks() {
    
  return (
    <div className={css.mainWindowLinks}>
      <ul>
        <li>
          <a href="http://example.com">FEATURED</a>
        </li>
        <li>
          <a href="http://example.com">GENRES & MOODS</a>
        </li>
        <li>
          <a href="http://example.com">NEW RELEASES</a>
        </li>
        <li>
          <a href="http://example.com">DISCOVERY</a>
        </li>
      </ul>
    </div>
  );
}
