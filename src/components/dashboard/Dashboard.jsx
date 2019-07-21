import React, { Component } from "react";
import Product from "../product/Product";

class Dashboard extends Component {
  render() {
    const { inventory } = this.props;
    let newProduct = inventory.map((product, index) => {
      return (
        <Product
          key={index}
          imageUrl={product.imageUrl}
          productName={product.productName}
          productPrice={product.productPrice}
        />
      );
    });
    return <div>{newProduct}</div>;
  }
}

export default Dashboard;
