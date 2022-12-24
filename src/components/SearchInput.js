import React from "react";

export const SearchInput = ({ handleSearchChange }) => {
  const onSearch = (word) => {
    handleSearchChange(word);
  };
  return (
    <div className="component-search-input">
      <div>
        <input onChange={(e) => onSearch(e.target.value)} />
      </div>
    </div>
  );
};
