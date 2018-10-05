import React, { Component } from "react";
import Intro from "./components/Intro";
import Outro from "./components/Outro";
import Features from "./components/Features";
import "./App.css";

class App extends Component {
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  }
  render() {
    return (
      <div className="App">
        <Intro />
        <Features />
        <Outro />
      </div>
    );
  }
}

export default App;
