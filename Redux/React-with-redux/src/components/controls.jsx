import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const numberElement = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADDITION",
      payload: { num: numberElement.current.value },
    });
    numberElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: numberElement.current.value },
    });
    numberElement.current.value = "";
  };
  const PrivacyToggle = () => {
    dispatch({ type: "PRIVACY" });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controller-row">
        <input
          type="text"
          className="number"
          ref={numberElement}
          placeholder="Enter number"
        />
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
      <div className="privacyBtn">
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={PrivacyToggle}
        >
          Privacy
        </button>
      </div>
    </>
  );
};
export default Controls;
