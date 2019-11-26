import React from "react";

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
            <i className="material-icons">favorite</i>
          </a>
          <span className="card-title">{label}</span>
        </div>
        <div className="card-action">
          <a href="#!">
            <i className="fas fa-eye"></i> View
          </a>
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
