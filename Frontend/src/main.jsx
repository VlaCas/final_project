import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './Context/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Password from './pages/Password';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home.jsx';
import './style/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <AuthProvider>
  		<BrowserRouter>
  			<Routes>

          <Route path="/" element={<Home />}/>
  				<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/password" element={<Password />} />
					<Route path="/resetPassword" element={<ResetPassword />} />

          <Route element={<ProtectedRoute/>}>
            <Route path="/profile" element={<>Profile</>}/>
          </Route>
          
  			</Routes>
  		</BrowserRouter>
    </AuthProvider>
	</React.StrictMode>
);