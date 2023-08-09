import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext.jsx';
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>

          <Route element={<ProtectedRoute/>}>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode> 
);