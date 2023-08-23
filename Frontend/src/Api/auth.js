import axios from './axios.config.js';

export const registerRequest = (user) => axios.post('/registerUser', user);

export const loginRequest = (user) => axios.post('/loginUser', user);

export const verifyRequest = () => axios.get('/verifyUserAuth');

export const sendEmailRequest = (user) => axios.post('/sendEmailUser', user);