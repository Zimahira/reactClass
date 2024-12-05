import React, { useState } from "react";

function CartPage(props) {
  const { totalPrice, displayItem, setDisplayItem } = props;

  const handleEmpty = () => {
    setDisplayItem([]);
  };

  return (
    <>
      <div>
        {displayItem.map((display) => (
          <div className="productcard">
            <h2 className="about">Name:{display.name}</h2>
            <p className="about">Price:${display.price}</p>
          </div>
        ))}
        {displayItem.length ? (
          <button onClick={handleEmpty}>empty cart</button>
        ) : null}
      </div>
    </>
  );
}

export default CartPage;
