import { useDispatch, useSelector } from "react-redux";
import { vote, showWinner, clear } from "../redux/emojiSlice";
import emojis from "../data";
import EmojiItem from "./EmojiItem";
import ShowResultsButton from "./ShowResultsButton";

export default function EmojiList() {
  const dispatch = useDispatch();
  const counts = useSelector((state) => state.emoji.counts);
  const winner = useSelector((state) => state.emoji.winner);

  return (
    <div className="emojis-container">
      <header>Голосування за найкращий смайлик</header>

      <div className="emojis-list">
        {emojis.map((emoji, index) => (
          <EmojiItem
            key={index}
            emoji={emoji}
            count={counts[index]}
            onClick={() => dispatch(vote(index))}
          />
        ))}
      </div>

      <ShowResultsButton onShow={() => dispatch(showWinner())} />

      <button className="clearResultsButton" onClick={() => dispatch(clear())}>
        Очистити результати
      </button>

      {winner === null && <div>Пока нет голосов</div>}
      {winner && <div>Победил: {winner}</div>}
    </div>
  );
}
