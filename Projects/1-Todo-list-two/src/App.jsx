import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "11/02/2024",
    },
    {
      name: "Go to College",
      date: "11/02/2024",
    },
  ];
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems}></TodoItems>
      </center>
    </div>
  );
}

export default App;
