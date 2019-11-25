import React from "react";

function SearchFilter() {
  return (
    <div className="search-filter center">
      <div className="row">
        <div className="col s12 input-field">
          <input type="text" placeholder="Start searching..." autoFocus />
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
