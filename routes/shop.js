import express from 'express';
import productsController from '../controllers/products.js';
// import { fileURLToPath } from 'url';

const router = express.Router();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(import.meta.filename);

router.get('/', productsController.getProducts);

export default router;
