import React from "react";
import "../../../styles/TodoForm.scss";


const TodoForm = ({ task, setTask, handleAddTodo }) => {
  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoForm;
