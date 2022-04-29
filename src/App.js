import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
