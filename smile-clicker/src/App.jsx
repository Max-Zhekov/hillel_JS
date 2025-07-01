import React from "react";
import EmojiList from "./components/EmojiList";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <EmojiList />
      </div>
    );
  }
}
