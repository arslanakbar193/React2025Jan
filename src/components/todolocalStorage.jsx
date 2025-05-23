import { SiWelcometothejungle } from "react-icons/si";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import TodoForm from "./TodoForm";
import TodoList from "./todoList";
const todoKey = "reactTodo";

const TodoLocalStorage = () => {
  const [task, setTask] = useState(() => {
    const rawTodo = localStorage.getItem(todoKey);
    if (!rawTodo) return [];
    return JSON.parse(rawTodo);
  });

  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return false;
    const contentMatch = task.find((cur) => {
      cur.content === content;
    });
    if (contentMatch) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const deleteItems = (value) => {
    const updatedTask = task.filter((curElem) => {
      return curElem.content !== value;
    });
    setTask(updatedTask);
  };

  const clearAll = () => {
    setTask([]);
  };

  localStorage.setItem(todoKey, JSON.stringify(task));

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <SiWelcometothejungle className="w-12 h-12 text-blue-500 mb-6" />
          <h1 className="text-5xl font-bold text-left text-gray-800 mb-6">Welcome to E-commerce Website</h1>
          <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
            <TodoForm addtodo={handleSubmit} />
            <ul>
              {task.map((cur) => {
                return (
                  <TodoList key={cur.id} data={cur.content} onDelete={deleteItems} />
                );
              })}
            </ul>
            <div onClick={clearAll}>Clear All</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoLocalStorage;
