import React from "react";
import emojis from "../data";
import EmojiItem from "./EmojiItem";
import ShowResultsButton from "./ShowResultsButton";

export default class EmojiList extends React.Component {
  constructor(props) {
    super(props);

    const savedCounts = localStorage.getItem("emojiCounts");
    this.state = {
      counts: savedCounts
        ? JSON.parse(savedCounts)
        : Array(emojis.length).fill(0),
      winner: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counts !== this.state.counts) {
      localStorage.setItem("emojiCounts", JSON.stringify(this.state.counts));
    }
  }

  handleClick = (index) => {
    this.setState((prevState) => {
      const newCounts = [...prevState.counts];
      newCounts[index]++;
      return { counts: newCounts };
    });
  };

  handleShowResult = (winningEmoji) => {
    this.setState({ winner: winningEmoji });
  };

  handleClear = () => {
    this.setState({
      counts: Array(emojis.length).fill(0),
      winner: null,
    });
    localStorage.removeItem("emojiCounts");
  };

  render() {
    const { counts, winner } = this.state;

    return (
      <div className="emojis-container">
        <header>Голосування за найкращий смайлик</header>
        <div className="emojis-list">
          {emojis.map((emoji, index) => (
            <EmojiItem
              key={index}
              emoji={emoji}
              count={counts[index]}
              onClick={() => this.handleClick(index)}
            />
          ))}
        </div>

        <ShowResultsButton
          emojis={emojis}
          counts={counts}
          onShow={this.handleShowResult}
        />

        <button className="clearResultsButton" onClick={this.handleClear}>
          Очистити результати
        </button>

        {winner === null && <div>Пока нет голосов</div>}
        {winner && <div>Победил: {winner}</div>}
      </div>
    );
  }
}
