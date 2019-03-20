import React from "react";
import ReviewDetails from "./ReviewDetails";
import "../styles/ReviewList.css";

const ReviewList = props => {
  return (
    <ul className="ReviewList">
      {props.reviews.map(review => (
        <li key={review.id}>
          <ReviewDetails
            {...review}
            onDeleteClick={id => props.onReviewDeleteClick(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
