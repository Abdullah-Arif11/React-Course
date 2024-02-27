import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/controls";
import PrivacyMsg from "./components/PrivacyMsg";
import { useSelector } from "react-redux";
function App() {
  const Privacy = useSelector((store) => store.privacy);
  return (
    <center>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {Privacy ? <PrivacyMsg /> : <DisplayCounter />}
            <Controls></Controls>
          </div>
        </Container>
      </div>
    </center>
  );
}

export default App;
