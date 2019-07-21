import React, { Component } from "react";

class Product extends Component {
  render() {
    let { imageUrl, productName, productPrice } = this.props;
    return (
      <div>
        <img src={imageUrl} />
        <h1>{productName}</h1>
        <h3>{productPrice}</h3>
      </div>
    );
  }
}

export default Product;
