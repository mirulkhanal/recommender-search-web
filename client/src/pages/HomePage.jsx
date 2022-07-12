import React from 'react';
import Search from '../components/Search';
import ItemList from '../components/ItemList';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `http://127.0.0.1:9000/api/products?search=${search}`
      );
      setProducts(response.data.products);
    };
    fetchProducts();
  }, [search]);

  return (
    <div>
      <Search setSearch={setSearch} />
      <ItemList products={products} />
    </div>
  );
};

export default HomePage;
