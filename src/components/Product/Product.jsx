import React from "react";
import "./Product.css";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="img-container">
        <img src={item.image} alt="" />
        <div className="category">{item.category}</div>
      </div>
      <div className="title">{item?.title}</div>
      <div className="description">{item?.description}</div>
      <div className="price-row">
        <div className="rating">
          <div className="item">⭐ {item.rating.rate}</div>
          <div className="item">{item.rating.count} ratings</div>
        </div>
        <div className="price">${item.price}</div>
      </div>
    </div>
  );
};

export default Product;
