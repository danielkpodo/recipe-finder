import React from "react";
import RecipeCard from "./RecipeCard";

function Recipe(props) {
  const { foodRecipes } = props;
  return (
    <div className="recipe">
      <div className="row">
        {foodRecipes.map((recipe, index) => (
          <RecipeCard food={recipe} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Recipe;
