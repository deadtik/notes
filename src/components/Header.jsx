import React from "react";

export default function Header() {
  return (
    <div className="nav">
      <div className="nav__logo">Notes</div>
      <div className="nav__buttoncontainer">
        {/* button 1 - plus*/}
        <div className="nav__buttoncontainer__icon plus-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="rgba(255,255,255,1)" />
          </svg>
        </div>

        {/* button 2 - home*/}
        <div className="nav__buttoncontainer__icon home-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" fill="rgba(255,255,255,1)" />
          </svg>
        </div>

        {/* button 3 - menu*/}
        <div className="nav__buttoncontainer__icon menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
