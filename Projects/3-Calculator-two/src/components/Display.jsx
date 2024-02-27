import styles from "./Display.module.css";

const Display = ({ screenText }) => {
  return (
    <input className={styles.display} type="text" value={screenText} readOnly />
  );
};
export default Display;
