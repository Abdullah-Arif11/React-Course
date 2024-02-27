import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import LifeRoutiens from "./LifeRoutiens";
import ErrorMsg from "./ErrorMessage";
import Container from "./Container";
import AddFixture from "./AddFixture";
import { useState } from "react";

function App() {
  let [dailyLife, setDailyLifeState] = useState([]);
  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      let newFix = event.target.value;
      let updateFix = [...dailyLife, newFix];
      setDailyLifeState(updateFix);
      event.target.value = "";
    }
  };
  return (
    <>
      <Container>
        <h1 className="kg-head">My-Daily-Life</h1>
        <AddFixture handleOnChange={handleOnChange}></AddFixture>
        <LifeRoutiens dailyLife={dailyLife}></LifeRoutiens>
        <ErrorMsg dailyLife={dailyLife}></ErrorMsg>
      </Container>
      <Container>
        <p>
          This is my DailyLife fixtures.I am living a greate life by following
          there fixtures.
        </p>
      </Container>
    </>
  );
}

export default App;
