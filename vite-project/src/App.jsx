import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Blog from "./components/Blog";
import Registration from "./components/Registration";
import Login2 from "./components/Login2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login2/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
