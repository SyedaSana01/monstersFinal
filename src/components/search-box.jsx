import React from 'react';
import './searchbox.styles.css';

function SearchBox({ className, type, placeholder, setSearchField }) {
  const changeHandler = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div>
      <input
        className={'search-box ${className}'}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  );
}

export default SearchBox;
