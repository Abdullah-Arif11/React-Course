import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItem from "../components/FetchItem";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItem></FetchItem>
      {fetchStatus.currentFetching ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
