import React from 'react';
import GetStarRating from '../decor/GetStarRating';
import './Product.css';
const Product = ({ item }) => {
  return (
    <div className='ProductContainer'>
      {item && (
        <div className='Product'>
          <div className='TopBar'>
            <div className='ProductCategory'>{item.category}</div>
            <div className='ProductRating'>
              <GetStarRating
                currentRating={Math.round(item.rating)}
                totalRating={5}
              />
            </div>
          </div>
          <div className='ProductImage'>
            <img
              className='ProductThumbnail'
              src={item.thumbnail}
              alt={item.title}
            />
          </div>
          <h1 className='ProductTitle'>{item.title}</h1>{' '}
          <span className='ProductPrice'>${item.price}</span>
          <p className='ProductDescription'>{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
