import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Password from './pages/Password';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import './style/index.css';

export const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>

      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/products" element={<Products />}/>
       

        <Route element={<ProtectedRoute/>}>
          <Route path="/profile" element={<>Profile</>}/>
        </Route>
        
      </Routes>

    </AnimatePresence>
  );
};