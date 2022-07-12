import React, { useEffect } from 'react';
import FilledStar from '../svg/FilledStar';
import Star from '../svg/Star';
import './StarRating.css';

const GetStarRating = ({ currentRating, totalRating }) => {
  const [stars, setStars] = React.useState();

  useEffect(() => {
    const calculatePlacement = () => {
      let placement = [];
      for (let i = 0; i < totalRating; i++) {
        if (i < currentRating) {
          placement.push(<FilledStar key={i} />);
        } else {
          placement.push(<Star key={i} />);
        }
      }
      setStars([...placement]);
    };
    calculatePlacement();
  }, [currentRating, totalRating]);

  return <div className='rating_mech'>{stars}</div>;
};

export default GetStarRating;
