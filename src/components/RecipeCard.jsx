import React from "react";
import { Link } from "react-router-dom";
const RecipeCard = props => {
  const { image, label, calories } = props.food.recipe;
  return (
    <div className="col s12 m6 l4 xl3">
      <div className="card card-large">
        <div className="card-image">
          <Link to={`/recipe/${label.replace(/ /g, "-")}`} title={label}>
            <img
              src={image}
              alt={label}
              data-caption="Jollof Rice and Agushi"
            />
          </Link>
          <Link
            className="btn-floating btn-small halfway-fab waves-effect waves-light red"
            to={`/recipe/${label.replace(/ /g, "-")}`}
          >
            <i className="material-icons">visibility</i>
          </Link>
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
