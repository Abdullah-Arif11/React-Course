import styles from "./BtnsContainer.module.css";

const BtnsContainer = () => {
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
    "+",
    "-",
    ".",
  ];
  return (
    <div className={styles.btnsContainer}>
      {btnsName.map((btnName) => (
        <button className={styles.btns}>{btnName}</button>
      ))}
    </div>
  );
};
export default BtnsContainer;
