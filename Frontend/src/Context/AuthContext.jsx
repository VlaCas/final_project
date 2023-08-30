import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyRequest, sendEmailRequest, passwordResetRequest, newPasswordRequest} from '../Api/auth.js';
import { confirmation } from '../Mails/confirmation.js';
import { resetPassword } from '../Mails/restore-password';

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
  const [successMessage, setSuccessMessage] = useState({ success: false, message: '' });
  const [showPopupMessage, setShowPopupMessage] = useState(true);
  const [resetForm, setResetForm] = useState(false);

  const handleError = (error) => {
    console.log(error);
    setLoading(false);
    setUser(null);
    setIsAuthenticated(false);
  };

  async function authUser () {
    try {
      const res = await verifyRequest();
      // console.log(res.data.message)

      if (!res.data) {
        handleError('Invalid token, authorization denied.');
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
      // console.log(registerResponse.data);

      const sendEmailResponse = await sendEmailRequest(values);
      // console.log(sendEmailResponse.data)
      
      setUser(registerResponse.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);

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
      const loginResponse = await loginRequest(user);
      // console.log(loginResponse.data.message);

      setUser(loginResponse.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      // console.log(error);

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

  const pwdResetRequest = async (data) => {
    try {
      const pwdResetResponse = await passwordResetRequest(data); 
      //console.log(pwdResetResponse.data.message);

      const values = { 
        to: data.email, 
        subject: 'Solicitud para Restablecimiento de Contraseña',
        html: resetPassword(pwdResetResponse.data.token)
      };

      const sendEmailResponse = await sendEmailRequest(values);
      //console.log(sendEmailResponse.data)

      setResetForm(true);
      setSuccessMessage((current) => ({
        ...current,
        success: true,
        message: pwdResetResponse.data.message
      }));
      console.log(pwdResetResponse.data);
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
    };
  };

  const newPwdRequest = async (values) => {
    try {
      const newPasswordResponse = await newPasswordRequest(values);
      //console.log(newPasswordResponse.data.message)

      setResetForm(true);
      setSuccessMessage((current) => ({
        ...current,
        success: true,
        message: newPasswordResponse.data.message
      }));
    } catch (error) {
      //console.log(error);

      const updateErrors = (field, message) => {
        setErrors((currentErrors) => ({
          ...currentErrors,
          [field]: message
        }));
      };

      const responseErrors = error.response.data;

      if (responseErrors.password) {
        updateErrors('password', responseErrors.message);
      } else {
        updateErrors('password', '');
      };
    };
  };

  useEffect(() => {
    authUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, errors, resetForm, showPopupMessage, successMessage, setShowPopupMessage, setErrors, setSuccessMessage, signup, signin, pwdResetRequest, newPwdRequest }}> 
      {children}
    </AuthContext.Provider>
  );
};