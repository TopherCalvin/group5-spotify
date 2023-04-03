import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CHomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CHomePage />}></Route>
    </Routes>
  );
}

export default App;
