import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Main from "./components/home/Main";
import Render from "./Resume/Reflect";
import Resume from "./Resume/Resume";
import Reflect from "./Resume/Reflect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Main />} />
      <Route path="/resume/download" element={<Reflect />} />
    </Routes>
  );
}

export default App;
