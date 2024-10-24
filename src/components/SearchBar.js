import React from "react";

function SearchBar(props) {

  const searchBarStyle = {
    width: '90%',
    boxSizing: 'border-box',
    border: '0.2rem solid #CCCCCC',
    borderRadius: '8rem',
    fontSize: '1rem',
    backgroundColor: '#E5EEF0',
    padding: '1rem 2rem 1rem 2rem',
  }

  return (
    <input
      style={searchBarStyle}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
}

export default SearchBar;