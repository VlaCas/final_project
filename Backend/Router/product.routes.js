// Importing the required modules and controllers
import { Router } from 'express';
import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from '../Controller/product.controller.js'; 
import { authRequired } from '../Middlewares/validateToken.js';

const router = Router();

// Get products
router.get('/getProducts', authRequired, getProducts);

// Get a product
router.get('/getProduct/:id', authRequired, getProduct);

// Create a product
router.post('/createProduct', authRequired, createProduct);

// Delete a product
router.delete('/deleteProduct/:id', authRequired, deleteProduct);

// Update a product
router.put('/updateProduct/:id', authRequired, updateProduct);

// Export the router
export default router;