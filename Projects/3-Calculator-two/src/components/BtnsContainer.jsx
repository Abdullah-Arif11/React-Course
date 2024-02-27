import styles from "./BtnsContainer.module.css";

const BtnsContainer = ({ handleOnClick }) => {
  const btnsName = [
    "C",
    "*",
    "/",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "00",
    "+",
    "-",
    ".",
    "=",
  ];
  return (
    <div className={styles.btnsContainer}>
      {btnsName.map((btnName) => (
        <button
          key={btnName}
          className={styles.btns}
          onClick={() => handleOnClick(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};
export default BtnsContainer;
