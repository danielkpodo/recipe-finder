import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class RecipeDetails extends Component {
  render() {
    const recipeId = this.props.match.params.label;
    console.log(recipeId);
    const recipeInfo = this.props.recipes.filter(
      food => food.recipe.label.replace(/ /g, "-") === recipeId
    )[0];
    const {
      label,
      calories,
      image,
      healthLabels,
      ingredientLines,
      source,
      url
    } = recipeInfo.recipe;
    return (
      <div className="recipe-details">
        <div className="row">
          <div className="col s12">
            <Link
              to="/"
              className="btn btn-small waves-effect waves-light back"
            >
              <i className="material-icons left">arrow_back</i> Go Back
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l6 xl6">
            <img src={image} alt={label} className="z-depth-3" />
          </div>
          <div className="col s12 m12 l6 xl6">
            <h3>{label}</h3> <hr className="style-seven" />
            <h4>Health Labels</h4>
            <div className="labels">
              {healthLabels.map((item, index) => {
                return (
                  <a
                    href="#!"
                    key={index}
                    className="waves-effect waves-light btn  btn-small"
                  >
                    <i className="material-icons left">info</i>
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="calories">
              <h4>Calories</h4>
              <p>{calories.toFixed(3)}</p>
            </div>
            <div className="ingredients">
              <h4>Ingredients</h4>
              <ul>
                {ingredientLines.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="source">
              <h4>Recipe Owner</h4>
              <p>
                Visit
                <a
                  href={url}
                  title={`Visit ${label} recipe cooking directions`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source}
                </a>
                for step-by-step directions on cooking
              </p>
            </div>
            <h4>Share to Family & Friends</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RecipeDetails);
