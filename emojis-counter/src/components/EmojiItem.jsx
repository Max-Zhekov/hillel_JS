export default function EmojiItem({ emoji, count, onClick }) {
  return (
    <div className="emoji-item" onClick={onClick}>
      <span className="emoji-icon">{emoji}</span>
      <span className="emoji-count">{count}</span>
    </div>
  );
}
