import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/index.css';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Password from './components/Password';
import NewPassword from './components/NewPassword';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/password" element={<Password />} />
				<Route path="/newPassword" element={<NewPassword />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);