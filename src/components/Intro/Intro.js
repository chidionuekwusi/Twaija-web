import React from "react";
import RubberBand from "react-reveal/RubberBand";
import "./style.scss";
import twaija_image from "../../imgs/twaija_1.png";
import logo from "../../imgs/logo_.png";

class Intro extends React.Component {
  render() {
    return (
      <article id="intro" className="intro">
        <div className="hero">
          <img className="logo" alt="logo" src={logo} />
          <h1 className="title">Twaija</h1>
          <span className="subtitle">The nigerian twitter client</span>

          <RubberBand>
            <img
              className="display-image"
              src={twaija_image}
              alt="Introductory"
            />
          </RubberBand>

          <a href="#download" className="download-button">
            DOWNLOAD
          </a>
          <a href="#features" className="download-button">
            FEATURES
          </a>
          <a
            href="https://www.github.com/chidionuekwusi/twaija"
            className="download-button"
          >
            PROJECT
          </a>
        </div>
      </article>
    );
  }
}

export default Intro;
