function TodoItem({ todoName, todoDate, deleteButton }) {
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-btn"
            onClick={() => deleteButton(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
