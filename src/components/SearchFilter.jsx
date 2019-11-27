import React from "react";
import food from "./images/food.png";
function SearchFilter(props) {
  const { inputRequest, inputFilter } = props;

  return (
    <div className="search-filter center">
      <img src={food} alt="food logo from the internet" />
      <div className="row form">
        <form onSubmit={inputRequest}>
          <div className="col  s12 input-field">
            <input
              type="text"
              placeholder="Search for recipes, ingredients, & anything food"
              onChange={inputFilter}
              autoFocus
            />
            <span className="helper-text" data-success="right">
              Hit enter once typing is done
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchFilter;
