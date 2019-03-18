import React from "react";
import ReviewDetails from "./ReviewDetails";
import "../styles/ReviewList.css";

const ReviewList = props => {
  return (
    <ul>
      {props.reviews.map(review => (
        <li key={review.id}>
          <ReviewDetails
            body={review.body}
            reviewer={review.reviewer}
            created_at={review.created_at}
            rating={review.rating}
          />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
