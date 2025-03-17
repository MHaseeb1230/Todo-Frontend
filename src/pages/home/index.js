
import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import NavTabs from "./components/NavTabs"; 
import "../../styles/Home.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  toggleTodo,
} from "../../redux/slices/todoSlice";
import "../../styles/global.scss";
import styles from "../../styles/Module.scss";

function Home() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all"); 
  const dispatch = useDispatch();
  const { loading, error, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    dispatch(fetchTodos());
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "uncompleted") return !todo.completed;
    return true; 
  });

  return (
    <div>
      <div className={styles.todoApp}>
        <h3 className="main">Todo App</h3>

      
        <NavTabs filter={filter} setFilter={setFilter} />

        <TodoForm task={task} setTask={setTask} handleAddTodo={handleAddTodo} />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error.message || JSON.stringify(error)}</p>}


       
        <TodoList
          todos={filteredTodos} 
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
        />
      </div>
    </div>
  );
}

export default Home;

