import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItems: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (crrTodoItems, action) => {
  let updTodos = crrTodoItems;
  if (action.type === "NEW_TODO") {
    const newItem = {
      name: action.payload.itemName,
      date: action.payload.itemDate,
    };
    updTodos = [...crrTodoItems, newItem];
  } else if (action.type === "DEL_TODO") {
    updTodos = crrTodoItems.filter((item) => {
      return item.name !== action.payload.delItem;
    });
  }
  return updTodos;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchedItems] = useReducer(todoItemsReducer, []);

  const addNewItems = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_TODO",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchedItems(newItemAction);
  };
  const deleteItem = (delItem) => {
    const delItemAction = {
      type: "DEL_TODO",
      payload: {
        delItem,
      },
    };
    dispatchedItems(delItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItems: addNewItems,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemContextProvider;
