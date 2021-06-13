import React from "react";
import Logo from "./BTC_Logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={60} height={68} />
      </div>
      <h1 className="bitcoin-title">Bitcoin App</h1>
    </div>
  );
}

export default Header;
