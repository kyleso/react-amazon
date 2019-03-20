import React, { Component } from "react";
import { Product } from "../requests";
import { Link } from 'react-router-dom'
import "../styles/ProductsIndexPage.css";

class ProductsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    };
  }

  componentDidMount() {
    Product.all().then(products => {
      this.setState({
        products: products,
        isLoading: false,
      });
    });
  }

  deleteProduct(id) {
    this.setState({
      products: this.state.products.filter(product => product.id !== id)
    });
  }

  render() {
    if (this.state.isLoading) {
			return (
				<main>
					<h3>Loading...</h3>
				</main>
			);
    }
    
    return (
      <div className="ProductsIndexPage">
        <h1>Products</h1>
        <ul>
          {this.state.products.map(product => {
            return (
              <li key={product.id} className="list-item">
                <small>
                  <em>{product.id}</em>
                </small>
                <Link to={`/products/${product.id}`}>
                  {product.title}
                </Link>
                <button
                  className="btn delete-btn"
                  onClick={() => this.deleteProduct(product.id)}
                >
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
