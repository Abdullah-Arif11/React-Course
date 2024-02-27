import styles from "./Items.module.css";

function Items({ item, handleOnClick, bought }) {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{item}</span>
      <button
        className={`${styles.buttons} btn btn-success`}
        onClick={handleOnClick}
      >
        Follow
      </button>
    </li>
  );
}
export default Items;
