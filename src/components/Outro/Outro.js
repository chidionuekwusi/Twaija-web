import React from "react";
import github from "../../imgs/github.png";
import team from "../../imgs/team.jpg";
import "./style.scss";
class Outro extends React.Component {
  render() {
    return (
      <div id="download" className="outro">
        <div className="outro-wrapper">
          <div className="download">
            <h2>Download</h2>
            <div className="container">
              <a
                href="https://github.com/chidionuekwusi/Twaija/releases/download/v1.0.0/Twaijav1.zip"
                download
              >
                For Windows
              </a>
              <a href="/#donwload" disabled>
                For Mac (Not available)
              </a>
            </div>
          </div>
          <div className="team">
            <img className="avatar" alt="team avatar" src={team} />
            <h3 className="avatar-title">Chidi Onuekwusi (superc)</h3>
            <a
              className="github-link"
              href="https://www.github.com/chidionuekwusi"
            >
              <img className="github-avatar" src={github} alt="github icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Outro;
