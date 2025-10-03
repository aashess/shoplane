
import * as productService from './product.service.js'

export const createProduct = async (req , res, next) => {
        try {
            const product = await productService.createProduct(req.body);
            if (product.status == 200) {
                console.log("Successfully Created!");
                res.status(200).json(product.message)
            }
            else
            {
                res.status(401).json(product.message)
            }
        } catch (error) {
                next(error);
        }
}

export const categories = async (req, res, next) => {
        try {
                const categories = await productService.categories(req.body);
                
                if (categories.status == 200) {
                    console.log("Successfully Created!");
                    res.status(200).json(categories.message)
                } else {
                    res.status(401).json(categories.message)
                }
        } catch (error) {
            console.log("Something Went Wrong kepp again.");
            
            next(error)
        }
}