import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";

export default function App(){
  return(
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>
  );
}