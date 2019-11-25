import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";
import Recipe from "./components/Recipe";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      searchPhrase: "",
      isLoading: true,
      api_key: "b645dff97ae465961c4ef42a777c94b0",
      app_id: "bf2a02e7"
    };
  }

  handleRecipesRequest = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const url = `https://api.edamam.com/search?q=${this.state.searchPhrase}&app_id=${this.state.app_id}&app_key=${this.state.api_key}&from=0&to=10`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          recipes: data
        });
        console.log("Results", this.state.recipes);
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
        <SearchFilter
          inputRequest={handleRecipesRequest}
          inputFilter={handleChange}
        />
        <Recipe />
      </div>
    );
  }
}

export default App;
