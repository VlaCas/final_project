// Importing the required modules and controllers
import { Router } from 'express';
import { registerUser, loginUser, logoutUser } from '../Controller/user.controller.js'; 
import { verifyUserToken } from '../Middlewares/validateToken.middleware.js';
import { validateSchema } from '../Middlewares/validator.schema.js';
import { registerSchema, loginSchema } from '../Schemas/user.schema.js';

const router = Router();

// Register user
router.post('/registerUser', validateSchema(registerSchema), registerUser);

// Login user
router.post('/loginUser', validateSchema(loginSchema), loginUser);

// Logout user
router.post('/logoutUser', logoutUser);

// Verify profile
// router.get('/profileUser', authRequired, profileUser);

// Verify token
router.get('/verifyUserAuth', verifyUserToken);

// Export the router
export default router;