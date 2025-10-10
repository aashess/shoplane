
import { Router } from "express";
import {fetchCategories, categories, createProduct, fetchProduct} from "./product.controller.js";

const router = Router();

router.post('/categories',categories)
router.get('/fetchCategories',fetchCategories)
router.post('/createProduct', createProduct)
router.get('/fetchProduct', fetchProduct)


export default router;