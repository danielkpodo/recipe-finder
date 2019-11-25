import React from "react";

function Recipe() {
  return (
    <div className="recipe">
      <div className="row">
        <div className="col s12 m6 l4 xl3">
          <div className="card card-large">
            <div className="card-image">
              <img
                src="https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="materialboxed"
                alt=""
                data-caption="Jollof Rice and Agushi"
              />
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">favorite</i>
              </a>
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">Recipe Url</a>
              <a href="#">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
