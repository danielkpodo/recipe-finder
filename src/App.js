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
  componentDidMount() {
    this.handleFetchRequest();
  }

  handleFetchRequest = () => {
    this.setState({ isLoading: true });
    const url = `https://api.edamam.com/search?q=chicken&app_id=${this.state.app_id}&app_key=${this.state.api_key}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          recipes: data
        });
        console.log(this.state.recipes);
      })
      .catch(err => console.log(err, "Failed to retrieve recipes"));
  };

  handleChange = e => {
    console.log("Input changed", e);
  };

  render() {
    const { handleChange } = this;
    return (
      <div className="app-container">
        <Navbar />
        <SearchFilter inputFilter={handleChange} />
        <Recipe />
      </div>
    );
  }
}

export default App;
