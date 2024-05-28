// SearchBox.jsx

import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(''); //state the track of search items of todos

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input 
      type="text"
      placeholder="Search..." //this search field is used to search the todos 
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
