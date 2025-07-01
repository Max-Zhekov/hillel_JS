import React from "react";

export default class ShowResultsButton extends React.Component {
  handleClick = () => {
    const { counts, emojis, onShow } = this.props;

    if (counts.length === 0) return;

    const maxVotes = Math.max(...counts);

    if (maxVotes === 0) {
      onShow(null);
      return;
    }

    const winnerIndex = counts.indexOf(maxVotes);
    onShow(emojis[winnerIndex]);
  };

  render() {
    return (
      <button className="showResultsButton" onClick={this.handleClick}>
        Show Results
      </button>
    );
  }
}
