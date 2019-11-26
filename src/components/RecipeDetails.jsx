import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class RecipeDetails extends Component {
  render() {
    const recipeId = this.props.match.params.label;
    const recipeInfo = this.props.recipes.filter(
      food => food.recipe.label.replace(/ /g, "-") === recipeId
    )[0];
    const { label, calories } = recipeInfo.recipe;
    return (
      <div className="recipe-details">
        <div className="row">
          <div className="col s12">
            <Link
              to="/"
              className="btn btn-small waves-effect waves-light lightred"
            >
              <i className="material-icons left">arrow_back</i> Go Back
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col s6">Name: {label}</div>
          <div className="col s6">Calories:{calories}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(RecipeDetails);
