export default function TodoItem({ task, onDelete }) {
  return (
    <li
      style={{
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#f2f2f2",
        padding: 10,
        borderRadius: 5,
      }}>
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: 10 }}>
        ❌
      </button>
    </li>
  );
}
