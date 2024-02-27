import styles from "./AddFixture.module.css";

const AddFixture = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter daily Fixture"
      className={styles.addFixture}
      onKeyDown={handleOnChange}
    />
  );
};
export default AddFixture;
