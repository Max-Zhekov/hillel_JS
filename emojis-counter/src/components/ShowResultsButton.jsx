export default function ShowResultsButton({ emojis, counts, onShow }) {
  function handleClick() {
    if (counts.length === 0) return;

    const maxVotes = Math.max(...counts);

    if (maxVotes === 0) {
      onShow(null);
      return;
    }

    const winnerIndex = counts.indexOf(maxVotes);
    onShow(emojis[winnerIndex]);
  }

  return (
    <button className="showResultsButton" onClick={handleClick}>
      Show Results
    </button>
  );
}
