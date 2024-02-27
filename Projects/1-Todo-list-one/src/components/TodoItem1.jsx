function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "14/10/2023";
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
