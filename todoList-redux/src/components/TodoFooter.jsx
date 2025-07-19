import { useSelector } from "react-redux";

export default function TodoFooter() {
  const todos = useSelector((state) => state.todos);
  return <footer>Усього задач: {todos.length}</footer>;
}
