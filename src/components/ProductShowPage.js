import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";
import "../styles/page.css";
import { Product } from "../requests";

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
      product: null,
      isLoading: true,
    };
    this.deleteReview = this.deleteReview.bind(this);
  }
  
  componentDidMount() {
    Product.one(this.props.match.params.id).then(product => {
      this.setState({
        product: product,
        isLoading: false,
      })
    })
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
    if (this.state.isLoading) {
      return (
        <main>
          <h3>Loading ....</h3>
        </main>
      )
    }
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
