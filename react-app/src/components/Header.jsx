import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="logo">N&R</h1>
      <h1 className="logo_full">Nurgali & Ramazan</h1>
      <p className="just_paragraph">Best fucking shop</p>
      <li>
        <img className="card_logo" src="/images/card.svg" alt="card_logo" />
        <img className="heart_logo" src="/images/heart.svg" alt="card_logo" />
        <img className="user_logo" src="/images/user.svg" alt="card_logo" />
      </li>
      <div className="border"></div>
    </header>
  );
};

export default Header;
