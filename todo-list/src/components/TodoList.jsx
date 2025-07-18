import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onDelete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}
