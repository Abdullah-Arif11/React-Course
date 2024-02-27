import styles from "./App.module.css";
import Display from "./components/Display";
import BtnsContainer from "./components/BtnsContainer";
import { useState } from "react";

function App() {
  let [screenText, setScreenText] = useState("");
  const handleOnClick = (btnName) => {
    console.log(btnName);
    let result = "";
    if (btnName === "=") {
      setScreenText(eval(screenText));
    } else if (btnName === "C") {
      setScreenText("");
    } else {
      let calVal = screenText.concat(btnName);
      setScreenText(calVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display screenText={screenText}></Display>
      <BtnsContainer handleOnClick={handleOnClick}></BtnsContainer>
    </div>
  );
}

export default App;
