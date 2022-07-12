import React from 'react';
const Search = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  };

  return (
    <div className=''>
      <form onSubmit={handleSearchSubmit}>
        <input
          type={'text'}
          placeholder='Search input'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
