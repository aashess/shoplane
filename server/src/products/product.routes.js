
import { Router } from "express";
import { categories, createProduct } from "./product.controller.js";

const router = Router();

router.post('/categories',categories)
router.post('/create', createProduct)


export default router;