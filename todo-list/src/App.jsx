import { useForm } from "react-hook-form";
import { useState } from "react";

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const [tasks, setTasks] = useState([]);

  const onSubmit = () => {
    const taskValue = getValues("task");
    if (taskValue.trim() === "") return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: taskValue, done: false },
    ]);
    reset();
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>📝 TODO List</h2>

      <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: 20 }}>
        <input
          {...register("task", {
            required: "Це поле обов'язкове",
            minLength: {
              value: 5,
              message: "Мінімум 5 символів",
            },
          })}
          placeholder="Enter task"
          style={{ padding: 8, width: "100%", marginBottom: 10 }}
        />
        {errors.task && (
          <p style={{ color: "red", marginBottom: 10 }}>
            {errors.task.message}
          </p>
        )}
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          style={{
            padding: 8,
            width: "100%",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}>
          ➕ Добавить
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
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
            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: 10 }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
