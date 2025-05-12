import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes,Route, Router} from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import Usersignup from "./pages/Usersignup";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import Home from "./pages/Home";
import ViewPageDetails from "./pages/ViewPageDetails";



function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/login" element={<UserLogin />}/>
      <Route path="/signup" element={<Usersignup />}/>
      <Route path="/adminlogin" element={<AdminLogin />}/>
      <Route path="/adminsignup" element={<AdminSignup />}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/viewpage-details/:id" element={<ViewPageDetails />}/>
    </Routes>
    </>
  );
}


export default App;
