import React from 'react';

function ProductDetails(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        {props.description}
        <br/>
        {props.price}
      </p>
      <small>Sold by {props.seller.full_name} at {props.created_at.toLocaleString()}</small>
    </div>
  )
}

export default ProductDetails;
