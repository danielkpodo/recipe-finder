import React from "react";
import { Link } from "react-router-dom";
const RecipeCard = props => {
  const { image, label, calories } = props.food.recipe;
  return (
    <div className="col s12 m6 l4 xl3">
      <div className="card card-large">
        <div className="card-image">
          <img
            src={image}
            className="materialboxed"
            alt={label}
            data-caption="Jollof Rice and Agushi"
          />

          <a
            className="btn-floating btn-small halfway-fab waves-effect waves-light red"
            href="#!"
          >
            <i className="material-icons">share</i>
          </a>
          <span className="card-title">{label}</span>
        </div>
        <div className="card-action">
          <Link className="view" to={`/recipe/${label.replace(/ /g, "-")}`}>
            <i className="fas fa-eye"></i> View
          </Link>
          <a href="#!">
            {" "}
            <i className="fas fa-info-circle"></i> Calories{" "}
            {Math.round(calories)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
