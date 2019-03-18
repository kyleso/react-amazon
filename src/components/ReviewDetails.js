import React from 'react';
import StarRating from "./StarRating";
import "../styles/ReviewDetails.css"

function ReviewDetails(props) {
  return (
    <div className="review-box">
      <p>{props.body}</p>
      <StarRating 
        max={5}
        rating={props.rating}
      />
      <div>
        <small>Reviewed by {props.reviewer.full_name} at {props.created_at.toLocaleString()}</small>
      </div>
    </div>
  )
}

export default ReviewDetails;
