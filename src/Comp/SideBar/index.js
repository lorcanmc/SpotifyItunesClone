import React from "react";
import Input from "../Input";
import css from "./SideBar.module.css";

export default function SideBar({ query, setQuery }) {
  return (
    <aside className={css.sidebar}>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fscrubbedin.co.uk%2Fwp-content%2Fuploads%2F2020%2F02%2Fspotify-logo-white-png-4-transparent.png%3Fresize%3D600%252C600%26ssl%3D1&f=1&nofb=1"
        width="50px"
        className={css.spotifyLogo}
        alt="logo"
      />
      <hr />
      <Input query={query} setQuery={setQuery} />
      <hr />
      <p>Home</p>
      <p>Your Music</p>
      <hr />
      <p>
        <small className={css.sidebarSmall}>RECENTLY PLAYED</small>
      </p>
      <p>
        New Traditions
        <br />
        <small className={css.sidebarSmall}>PLAYLIST</small>
      </p>
      <p>
        Install App{" "}
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fdownload-2-512.png&f=1&nofb=1"
          className={css.sidebarIcon}
          width="15px"
          alt="install"
        />
      </p>
      <hr />
    </aside>
  );
}
