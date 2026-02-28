import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="body-container">
        <Header></Header>
        <div>
          <Outlet/>
        </div>

      </div>
    </>
  );
}

export default App;
