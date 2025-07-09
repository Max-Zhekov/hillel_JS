import { useRef, useState, useEffect } from "react";
import InputField from "./inputField";
import Task from "./Task";
import Modal from "./Modal";
import ConfirmModal from "./ConfirmModal";

const STORAGE_KEY = "tasks";

const Main = () => {
  // Uncomment if you want to check for errors
  // throw new Error("Тестовая ошибка в Main");

  let inputValue = useRef();
  const [tasksText, setTasksText] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasksText));
  }, [tasksText]);

  const [modalMessage, setModalMessage] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  function addTask() {
    const newTask = inputValue.current.value;
    if (newTask.trim() !== "") {
      setTasksText((prev) => [...prev, newTask]);
      inputValue.current.value = "";
    }
  }

  function handleClick() {
    addTask();
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  function deleteTask(indexToRemove) {
    setTasksText((prev) => prev.filter((_, index) => index !== indexToRemove));
  }

  function removeAllTasks() {
    if (tasksText.length === 0) {
      setModalMessage("You don't have any task");
      return;
    }

    setShowConfirm(true);
  }

  function closeModal() {
    setModalMessage(null);
  }

  function handleConfirm() {
    setTasksText([]);
    setShowConfirm(false);
  }

  function handleCancel() {
    setShowConfirm(false);
  }

  return (
    <div className="container">
      <h1 className="title">My ToDoList</h1>
      <InputField ref={inputValue} onKeyDown={handleKeyDown} />
      <div className="buttons">
        <button className="btn-add" onClick={handleClick}>
          Add task
        </button>
        <button className="btn-removeAllTasks" onClick={removeAllTasks}>
          Remove all tasks
        </button>
        {modalMessage && <Modal message={modalMessage} onClose={closeModal} />}
        {showConfirm && (
          <ConfirmModal
            message={"Are you sure you want to delete all tasks?"}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
      </div>

      <Task text={tasksText} onDelete={deleteTask} />
    </div>
  );
};

export default Main;
