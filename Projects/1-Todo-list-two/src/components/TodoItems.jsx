import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems }) {
  return (
    <div className={styles.items}>
      {todoItems.map((item) => (
        <TodoItem key={item.name} item={item}></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
