import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./Search.css";

export default class Search extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="componentsearchinput">
        <div>
        <br /><br />
          <input placeholder="Search for ur fav emoji 😊!!" onChange={this.handleChange} />
          <div> 💡Just Click On The Emoji to Copy💡</div>
          <br />
        </div>
      </div>
    );
  }
}