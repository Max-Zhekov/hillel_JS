export default function Task({ text, onDelete }) {
  return (
    <>
      {text.map((task, index) => (
        <div className="task" key={index}>
          <p>{task}</p>
          <button onClick={() => onDelete(index)} className="btn-delete">
            X
          </button>
        </div>
      ))}
    </>
  );
}
