import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import NoTodo from "./components/NoTodo";
import "./App.css";
import TodoItemContextProvider, {
  TodoItemsContext,
} from "./store/StoreTodoItems";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems></TodoItems>
        <NoTodo></NoTodo>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
