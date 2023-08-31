// Importing the required modules and controllers
import { Router } from 'express';
import { registerUser, loginUser, logoutUser, sendEmailUser, passwordResetRequest, newPasswordUser } from '../Controller/user.controller.js'; 
import { verifyUserToken, verifyPasswordResetToken } from '../Middlewares/validateToken.middleware.js';
import { validateSchema } from '../Middlewares/validator.schema.js';
import { registerSchema } from '../Schemas/user.schema.js';

const router = Router();

// Register user
router.post('/registerUser', validateSchema(registerSchema), registerUser);

// Login user
router.post('/loginUser', loginUser);

// Logout user
router.post('/logoutUser', verifyUserToken, logoutUser);

// Verify token
router.get('/verifyUserAuth', verifyUserToken);

// Send Email
router.post('/sendEmailUser', sendEmailUser);

// Password Reset Request 
router.post('/passwordResetRequest', passwordResetRequest);

// New Password
router.post('/newPasswordUser', verifyPasswordResetToken, newPasswordUser);

// Export the router
export default router;