import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems, handleDeleteButton }) {
  return (
    <div className={styles.items}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
          deleteButton={handleDeleteButton}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
