import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import NoTodo from "./components/NoTodo";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleOnClick = (itemName, itemDate) => {
    const newItem = {
      name: itemName,
      date: itemDate,
    };
    let updTodos = [...todoItems, newItem];
    setTodoItems(updTodos);
  };
  const handleDeleteButton = (delItem) => {
    console.log(delItem);
    const afterDelete = todoItems.filter((item) => {
      return item.name !== delItem;
    });
    setTodoItems(afterDelete);
  };
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo addOnClick={handleOnClick} />
        <TodoItems
          todoItems={todoItems}
          handleDeleteButton={handleDeleteButton}
        ></TodoItems>
        {todoItems.length === 0 && <NoTodo></NoTodo>}
      </center>
    </div>
  );
}

export default App;
