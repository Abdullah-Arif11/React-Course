import { useContext } from "react";
import { TodoItemsContext } from "../store/StoreTodoItems";
import styles from "./NoTodo.module.css";

const NoTodo = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <h3 className={styles.msg}>There is nothing to do.Enjoy!</h3>
    )
  );
};
export default NoTodo;
