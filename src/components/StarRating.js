import React from 'react';
import Star from './Star';

const StarRating = (props) => {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<Star style={{color: 'orange', height: '20px'}}/>)
  }
  for (let j = 0; j < props.max - props.rating; j++) {
    stars.push(<Star style={{color: 'lightgrey', height: '20px'}}/>)
  }
  
  return (
    <div>{stars}</div>
  )
}

export default StarRating;
