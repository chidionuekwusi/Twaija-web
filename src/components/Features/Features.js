import React from "react";
import Fade from "react-reveal/Fade";
import "./style.scss";
import t2 from "../../imgs/twaija_2.png";
import t1 from "../../imgs/twaija_1.png";
import t3 from "../../imgs/twaija_3.png";

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.content = [
      "Twitter feed",
      "Display your mentions",
      "User profiles",
      "Themes",
      "Notifications"
    ];
  }
  render() {
    return (
      <article id="features" className="features">
        <Fade left>
          <div className="content">
            <div>
              <h2 className="title">What it can do</h2>
              <ul className="list">
                {this.content.map(x => (
                  <li className="item">{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="gallery">
            <img className="pic3" alt="pic3" src={t3} />
            <img className="pic1" alt="pic1" src={t2} />
            <img className="pic2" alt="pic2" src={t1} />
          </div>
        </Fade>
      </article>
    );
  }
}

export default Features;
