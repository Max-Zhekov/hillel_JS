import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>TODO</h1>
        <TodoForm />
        <TodoList />
        <TodoFooter />
      </div>
    </Provider>
  );
}
