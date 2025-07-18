import { useForm } from "react-hook-form";

export default function TodoForm({ onAdd }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.task.trim() === "") return;
    onAdd(data.task);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", gap: "10px", marginBottom: 20 }}>
      <input
        {...register("task")}
        placeholder="Введіть задачу"
        style={{ padding: 8, flex: 1 }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        Додати
      </button>
    </form>
  );
}
