import { useSelector } from "react-redux";
const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter is: {counterVal}</p>;
};
export default DisplayCounter;
