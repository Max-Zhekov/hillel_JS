import React from "react";

export default class EmojiItem extends React.Component {
  render() {
    const { emoji, count, onClick } = this.props;

    return (
      <div className="emoji-item" onClick={onClick}>
        <span className="emoji-icon">{emoji}</span>
        <span className="emoji-count">{count}</span>
      </div>
    );
  }
}
