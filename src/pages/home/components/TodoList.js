// import React from "react";
// import "../../../styles/TodoList.scss";


// const TodoList = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
//   return (
//     <ul className="todo-list">
//       {todos.map((todo) => (
//         <li  key={todo.id} className={todo.completed ? "completed" : ""}>
//           <span onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
//           <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
          
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;


import React from "react";
import "../../../styles/TodoList.scss";

const TodoList = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodo(todo._id)} // ✅ Correctly toggles only the clicked item
          />
          <span className={todo.completed ? "completed-text" : ""}>
            {todo.text}
          </span>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

