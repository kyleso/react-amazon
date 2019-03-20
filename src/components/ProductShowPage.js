import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";
import productInfo from "../data/productInfo";
import "../styles/page.css";

// const { title, description, created_at, seller, reviews, price } = product;
// const ProductShowPage = () => {
//   return (
//     <main>
//       <ProductDetails
//         title={title}
//         description={description}
//         created_at={created_at}
//         seller={seller}
//         reviews={reviews}
//       />
//       <h3>Reviews</h3>
//       <ReviewList
//         reviews={product.reviews}
//       />
//     </main>
//   )
// }

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        ...productInfo
      }
    };
    this.deleteReview = this.deleteReview.bind(this);
  }

  deleteReview(reviewId) {
    this.setState(state => {
      return {
        product: {
          ...state.product,
          reviews: state.product.reviews.filter(
            review => review.id !== reviewId
          )
        }
      };
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="ProductShowPage">
        <ProductDetails {...product} />
        <ReviewList reviews={this.state.product.reviews} onReviewDeleteClick={this.deleteReview}/>
      </div>
    );
  }
}

export default ProductShowPage;
