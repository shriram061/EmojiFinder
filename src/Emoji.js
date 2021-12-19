import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";


import EmojiResults from "./EmojiResults";
import "./Emoji.css";

class Emoji extends PureComponent {
  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map(emojiData => (
          
          <EmojiResults className="component-emoji-result"
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
    );
  }
}
Emoji.propTypes = {
  emojiData: PropTypes.array
};
export default Emoji;