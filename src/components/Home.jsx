import React from "react";
import SearchFilter from "./SearchFilter";
import Recipe from "./Recipe";

function HomePage(props) {
  const { inputRequest, inputFilter, foodRecipes } = props;
  return (
    <>
      <SearchFilter inputRequest={inputRequest} inputFilter={inputFilter} />
      <Recipe foodRecipes={foodRecipes} loader={props.loader} />
    </>
  );
}

export default HomePage;
