import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register.jsx'
//import Login from './components/Login.jsx'
import Gif from './components/Gif.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/gif" element={<Gif/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode> 
);