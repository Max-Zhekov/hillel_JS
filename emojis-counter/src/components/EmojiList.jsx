import { useState, useEffect } from "react";
import emojis from "../data";
import EmojiItem from "./EmojiItem";
import ShowResultsButton from "./ShowResultsButton";

export default function EmojiList() {
  const [counts, setCounts] = useState(() => {
    const saved = localStorage.getItem("emojiCounts");
    return saved ? JSON.parse(saved) : Array(emojis.length).fill(0);
  });

  const [winner, setWinner] = useState();

  useEffect(() => {
    localStorage.setItem("emojiCounts", JSON.stringify(counts));
  }, [counts]);

  function handleClick(index) {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  }

  function handleShowResult(winningEmoji) {
    setWinner(winningEmoji);
  }

  function handleClear() {
    const resetCounts = Array(emojis.length).fill(0);
    setCounts(resetCounts);
    setWinner(null);
    localStorage.removeItem("emojiCounts");
  }

  return (
    <div className="emojis-container">
      <header>Голосування за найкращий смайлик</header>
      <div className="emojis-list">
        {emojis.map((emoji, index) => (
          <EmojiItem
            key={index}
            emoji={emoji}
            count={counts[index]}
            onClick={() => handleClick(index)}>
            {emoji}
          </EmojiItem>
        ))}
      </div>

      <ShowResultsButton
        emojis={emojis}
        counts={counts}
        onShow={handleShowResult}
      />

      <button className="clearResultsButton" onClick={handleClear}>
        Очистити результати
      </button>

      {winner === null && <div>Пока нет голосов</div>}
      {winner && <div>Победил: {winner}</div>}
    </div>
  );
}
