import React from "react";
import RecipeCard from "./RecipeCard";

function Recipe(props) {
  const { foodRecipes } = props;
  return (
    <div className="recipe">
      <div className="row">
        {props.loader ? (
          <div className="row">
            <div className="col s12">
              <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
              </div>
            </div>
          </div>
        ) : (
          foodRecipes.map((recipe, index) => (
            <RecipeCard food={recipe} key={index} />
          ))
        )}
      </div>
    </div>
  );
}

export default Recipe;
