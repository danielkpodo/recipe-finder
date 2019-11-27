import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import RecipeDetails from "./components/RecipeDetails";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      searchPhrase: "",
      isLoading: false,
      api_key: "b645dff97ae465961c4ef42a777c94b0",
      app_id: "bf2a02e7",
      totalResults: 0
    };
  }

  handleRecipesRequest = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const { searchPhrase, api_key, app_id } = this.state;
    const url = `https://api.edamam.com/search?q=${
      searchPhrase === "" ? "chicken" : searchPhrase
    }&app_id=${app_id}&app_key=${api_key}&from=0&to=50`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          recipes: data.hits
        });
      })
      .catch(err => console.log("Failure to retrieve recipes", err));
  };

  handleChange = e => {
    this.setState({
      searchPhrase: e.target.value
    });
  };

  render() {
    const { handleRecipesRequest, handleChange } = this;
    return (
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/recipe/:label"
            render={() => <RecipeDetails recipes={this.state.recipes} />}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                inputRequest={handleRecipesRequest}
                inputFilter={handleChange}
                foodRecipes={this.state.recipes}
                loader={this.state.isLoading}
              />
            )}
          />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
