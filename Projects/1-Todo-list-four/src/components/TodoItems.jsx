import { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/StoreTodoItems";

function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.items}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
