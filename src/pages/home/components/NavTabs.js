import React from "react";
import styles from "../../../styles/NavTabs.module.scss"

const NavTabs = ({ filter, setFilter }) => {
  return (
    <div className={styles.navTabs}>
      <button 
        className={filter === "all" ? styles.active : ""} 
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button 
        className={filter === "completed" ? styles.active : ""} 
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button 
        className={filter === "uncompleted" ? styles.active : ""} 
        onClick={() => setFilter("uncompleted")}
      >
        Uncompleted
      </button>
    </div>
  );
};

export default NavTabs;
