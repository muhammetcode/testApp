import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Haryt from "./pages/Haryt";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/haryt" element={<Haryt />} />
      </Routes>
      
    </>
  );
}

export default App;
