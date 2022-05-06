import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path={"/signup"} exact element={<Signup />} />
          <Route path={"/welcome"} exact element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
