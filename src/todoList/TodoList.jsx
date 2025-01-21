import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import AddTask from "./AddTask";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    if (task.trim() === "") return;
    setTasks([...tasks, task.trim()]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <AddTask onAddTask={handleAddTask} />
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => handleDeleteTask(index)}
          />
        ))}
      </ul>
      {tasks.length > 0 && (
        <button className="clear-btn" onClick={handleClearAll}>
          {" "}
          Clear All
        </button>
      )}
    </div>
  );
};
export default TodoList;
