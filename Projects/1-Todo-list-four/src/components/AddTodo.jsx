import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../store/StoreTodoItems";

function AddTodo() {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const { addNewItems } = useContext(TodoItemsContext);
  const handleButtonClicked = (event) => {
    event.preventDefault();
    const itemName = todoNameElement.current.value;
    const itemDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    if (itemName !== "" || itemDate !== "") {
      addNewItems(itemName, itemDate);
    }
  };

  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleButtonClicked}>
        <div className="col-6">
          <input
            className={styles.input}
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input className={styles.input} type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success todo-btn">Add</button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
