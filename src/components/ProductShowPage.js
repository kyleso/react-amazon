import React from 'react';
import ProductDetails from "./ProductDetails";
import ReviewList from "./ReviewList";
import product from "../oneProductData"
import "../styles/page.css"


const {title, description, created_at, seller, reviews} = product;
const ProductShowPage = () => {
  return (
    <main>
      <ProductDetails
        title={title}
        description={description}
        created_at={created_at}
        seller={seller}
        reviews={reviews}
      />
      <h3>Reviews</h3>
      <ReviewList 
        reviews={product.reviews}
      />
    </main>
  )
}

export default ProductShowPage;