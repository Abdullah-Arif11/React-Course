import AppName from "./components/AppName";
import Motive from "./components/Motive";
import Clock from "./components/Clock";
import "./App.css";

function App() {
  return (
    <center className="container">
      <AppName></AppName>
      <Motive></Motive>
      <Clock></Clock>
    </center>
  );
}

export default App;
