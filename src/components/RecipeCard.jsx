import React from "react";

const RecipeCard = props => {
  const { image } = props.food.recipe;
  return (
    <div className="col s12 m6 l4 xl3">
      <div className="card card-large">
        <div className="card-image">
          <img
            src={image}
            className="materialboxed"
            alt=""
            data-caption="Jollof Rice and Agushi"
          />

          <a
            className="btn-floating halfway-fab waves-effect waves-light red"
            href="#!"
          >
            <i className="material-icons">favorite</i>
          </a>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <div className="card-action">
          <a href="#!">Recipe Url</a>
          <a href="#!">Details</a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
