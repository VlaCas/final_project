import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyRequest, sendEmailRequest } from '../Api/auth.js';
import Cookies from 'js-cookie';
import { confirmation } from "../Mails/confirmation.js";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({ email: '', password: ''});
  const [showErrors, setShowErrors] = useState({ email: false, password: false})

  const handleError = (error = 'There is no token or it is invalid.') => {
    //console.log(error);
    setLoading(false);
    setUser(null);
    setIsAuthenticated(false);
  };

  async function authUser (token) {
    try {
      const res = await verifyRequest(token);
      //console.log(res.data.message)

      if (!res.data) {
        handleError();
        return
      }

      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  };

  const signup = async (user) => {
    try {

      const values = { 
        to: user.email, 
        subject: 'Bienvenid@ a Digital',
        html: confirmation(user.name)
      };

      const registerResponse = await registerRequest(user);
      //console.log(registerResponse.data);

      const sendEmailResponse = await sendEmailRequest(values);
      //console.log(sendEmailResponse.data)
      
      setUser(registerResponse.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      //console.log(error);

      const updateErrors = (field, message) => {
        setErrors((currentErrors) => ({
          ...currentErrors,
          [field]: message
        }));
      };
      
      const responseErrors = error.response.data;

      if (responseErrors.email) {
        updateErrors('email', responseErrors.message);
      } else {
        updateErrors('email', '');
      }
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      //console.log(res.data.message);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      //console.log(error);

      const updateErrors = (field, message) => {
        setErrors((currentErrors) => ({
          ...currentErrors,
          [field]: message
        }));
      };

      const responseErrors = error.response.data;

      const fieldsToUpdate = ['email', 'password'];

      fieldsToUpdate.forEach((field) => {
        if (responseErrors[field]) {
          updateErrors(field, responseErrors.message);
        } else {
          updateErrors(field, '');
        }
      });
    }
  };

  useEffect(() => {
    const cookies = Cookies.get();

    if (!cookies.token) {
      handleError();
      return
    };

    authUser(cookies.token);
  }, []);

  const handleAuthEffect = (navigate) => {
    if (isAuthenticated) navigate('/');

    const responseErrors = errors;

    ['email', 'password'].forEach((field) => {
      setShowErrors((currentValue) => ({
        ...currentValue,
        [field]: !!responseErrors[field],
      }));
    });
  };

  return (
    <AuthContext.Provider value={{ signup, signin, user, isAuthenticated, loading, errors, showErrors, setShowErrors, handleAuthEffect }}>
      {children}
    </AuthContext.Provider>
  );
};