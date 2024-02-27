import styles from "./App.module.css";
import Display from "./components/Display";
import BtnsContainer from "./components/BtnsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <BtnsContainer></BtnsContainer>
    </div>
  );
}

export default App;
