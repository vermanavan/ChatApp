import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./pages/Register";
export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Chat/>}/>

    
  </Routes>
  </BrowserRouter>;
} 