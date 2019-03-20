import React, { Component } from "react";
import productList from "../data/productList";

class ProductsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...productList]
    };
  }

  deleteProduct(id) {
    this.setState({
      products: this.state.products.filter(product => product.id !== id)
    });
  }

  render() {
    return (
      <div className="ProductsIndexPage">
        <h1>Products</h1>
        <ul>
          {this.state.products.map(product => {
            return (
              <li key={product.id}>
                <small>
                  <em>{product.id}</em>
                </small>
                <a href="#">{product.title}</a>
                <button className="btn delete-btn" onClick={() => this.deleteProduct(product.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductsIndexPage;
