import React from "react";

function SearchFilter(props) {
  const { inputFilter } = props;

  return (
    <div className="search-filter center">
      <div className="row">
        <div className="col s12 input-field">
          <input
            type="text"
            placeholder="Start searching..."
            autoFocus
            onChange={inputFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
