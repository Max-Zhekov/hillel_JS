import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text }]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>📝 TODO List</h2>
      <TodoForm onAdd={addTask} />
      <TodoList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}
