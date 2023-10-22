import { Component } from "react";
import "./index.css";

class Skills extends Component {
  render() {
    return (
      <div className="skill-cont">
        <h1 className="skill-head"> Skills</h1>
        <ul className="s-ul">
          <li className="s-li">
            <p> HTML</p>
          </li>
          <li className="s-li">
            <p> CSS</p>
          </li>
          <li className="s-li">
            <p> Javascript</p>
          </li>
          <li className="s-li">
            <p> Python</p>
          </li>
          <li className="s-li">
            <p> Java</p>
          </li>
          <li className="s-li">
            <p> ReactJs</p>
          </li>
          <li className="s-li">
            <p> NodeJs</p>
          </li>
          <li className="s-li">
            <p> Sql</p>
          </li>
          <li className="s-li">
            <p> MongoDB</p>
          </li>
          <li className="s-li">
            <p> Git</p>
          </li>

          <li className="s-li">
            <p> Aws</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills;
