import React, { PureComponent } from "react";
import Heading from "./Heading";
import Search from "./Search";
import Emoji from "./Emoji";
import filterEmoji from "./filterEmoji";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Heading />
        <Search textChange={this.handleSearchChange} />
        <Emoji emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}