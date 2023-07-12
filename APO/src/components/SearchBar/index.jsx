import React from 'react';

const SearchBar = ({ handleSearchChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered mb-4"
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
