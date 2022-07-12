import React from 'react';
import Product from './Product';
import './Product.css';

const ListItems = ({ products }) => {
  return (
    <div className='ProductListContainer'>
      {products &&
        products.map((product) => <Product item={product} key={product._id} />)}
    </div>
  );
};

export default ListItems;
