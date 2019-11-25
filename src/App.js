import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";
import Recipe from "./components/Recipe";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <SearchFilter />
        <Recipe />
      </div>
    );
  }
}

export default App;
