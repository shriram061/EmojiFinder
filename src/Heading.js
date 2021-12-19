import React, { PureComponent } from "react";
import "./Heading.css";

export default class Heading extends PureComponent {
  render() {
    return (
      <header className="componentheader">
        
        <div className="App-link">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />
        <span className="a">E</span>
        <span className="c">m</span>
        <span className="a">o</span>
        <span className="c">j</span>
        <span className="a">i</span>
        <span className="c"> </span>
        <span className="a">F</span>
        <span className="c">i</span>
        <span className="a">n</span>
        <span className="c">d</span>
        <span className="a">e</span>
        <span className="c">r</span>

        
        
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
          alt=""
        />
        <div>
          <sub className="small-text">
          <span className="j">“Let's</span>
          <span className="c"> </span>
          <span className="j">Find</span>
          <span className="c"> </span>
          <span className="j">Your</span>
          <span className="c"> </span>
          <span className="j">Favourite</span>
          <span className="c"> </span>
          <span className="j">Emoji</span>
          <span className="c"> </span>
          <span className="j">!”</span>



            {/* “Let's Find Your Favourite Emoji!”  */}
            </sub>
        </div>
        </div>
      </header>
    );
  }
}