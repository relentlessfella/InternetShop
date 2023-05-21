import React from "react";
import { useState } from "react";

const Stuff = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [price, setPrice] = useState(5000);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);

    if (buttonIndex === 0) {
      setPrice(5000);
    } else if (buttonIndex === 1) {
      setPrice(5000 + 0.1 * 5000);
    } else if (buttonIndex === 2) {
      setPrice(5000 + 0.2 * 5000);
    }
  };

  return (
    <section>
      <div className="card">
        <h1 className="card_h1">All Stuff</h1>
        <div className="search">
          <img src="/images/search.svg" alt="search_logo" />
          <input className="search_place" placeholder="Search..." />
        </div>
      </div>

      <div className="card_stuff">
        <div className="favorite">
          <img src="/images/notfavorite.svg" alt="notfavorite" />
          <h1>Name of stuff</h1>
        </div>

        <div className="card_img">
          <img src="/images/shirt.png" alt="clothes" />
        </div>

        <div className="price">
          <span>Price:</span>
          <br />
          <b>{price}$</b>
          <button>Buy Now</button>
        </div>

        <div className="selector">
          <button
            className={activeButton === 0 ? "active" : ""}
            onClick={() => handleButtonClick(0)}
          >
            Small
          </button>
          <button
            className={activeButton === 1 ? "active" : ""}
            onClick={() => handleButtonClick(1)}
          >
            Medium
          </button>
          <button
            className={activeButton === 2 ? "active" : ""}
            onClick={() => handleButtonClick(2)}
          >
            Large
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stuff;
