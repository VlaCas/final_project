// Importing the required modules and controllers
import { Router } from 'express';
import { registerUser, loginUser, logoutUser, profileUser } from '../Controller/user.controller.js'; 
import { authRequired } from '../Middlewares/validateToken.js';

const router = Router();

// Register user
router.post('/registerUser', registerUser);

// Login user
router.post('/loginUser', loginUser);

// Logout user
router.post('/logoutUser', logoutUser);

// Verify profile
router.get('/profileUser', authRequired, profileUser);

// Export the router
export default router;