function TodoItem({ item }) {
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{item.name}</div>
        <div className="col-4">{item.date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
