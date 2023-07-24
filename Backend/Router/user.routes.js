// Importing the required modules and controllers
import { Router } from 'express';
import { registerUser } from '../Controller/user.controller.js'; 

const router = Router();

//const { loginUser, logoutUser } = require('../Controller/Auth.js')
//const jwt = require('jsonwebtoken');

// Register user
router.post('/registerUser', registerUser);

// Export the router
export default router;