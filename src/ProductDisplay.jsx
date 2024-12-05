import "./App.css";
import { useState } from "react";
import productData from "./data";

function ProductDisplay(props) {
  const { totalPrice, setTotalPrice, displayItem, setDisplayItem } = props;

  const handleClick = (dataObject) => {
    setTotalPrice(totalPrice + dataObject.price);
    setDisplayItem([...displayItem, dataObject]);
  };

  return (
    <div className="parent">
      <h1>Dessert</h1>
      <div className="child">
        <div className="container">
          {productData.map((data, index) => (
            <div className="productcard">
              <img className="image" src={data.image.desktop} alt="" />
              <h2 className="about">Name:{data.name}</h2>
              <p className="about">{data.category}</p>
              <p className="about">Price:${data.price}</p>
              <button className="button" onClick={() => handleClick(data)}>
                add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
