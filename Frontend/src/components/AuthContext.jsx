import React, { createContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Obtener el estado de inicio de sesión del almacenamiento local al cargar el proveedor
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedLoggedIn) {
      setIsLoggedIn(JSON.parse(storedLoggedIn));
    }
  }, []);

  const setLoggedIn = (value) => {
    setIsLoggedIn(value);
    localStorage.setItem('isLoggedIn', JSON.stringify(value));
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children ? children : <Outlet />}
    </AuthContext.Provider>
  );
};
