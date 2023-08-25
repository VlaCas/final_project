import axios from './axios.config.js';

export const registerRequest = (user) => axios.post('/registerUser', user);

export const loginRequest = (user) => axios.post('/loginUser', user);

export const verifyRequest = () => axios.get('/verifyUserAuth');

export const sendEmailRequest = (user) => axios.post('/sendEmailUser', user);

export const passwordResetRequest = (email) => axios.post('/passwordResetRequest', email);

export const newPasswordRequest = (values) => axios.post('/newPasswordUser', values);