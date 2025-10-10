
import * as productService from './product.service.js'

// ----------create Product--------
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
                    console.error("Something went Wrong.", error);
                                    
        }
}

// ---------Fetch Product-------------
export const fetchProduct = async (req,res,next) => {
    try {
            const search = req.query.search;
            const fetchProduct = await productService.fetchProduct(search);
            if (fetchProduct.status == 200) {
                    res.status(200).json(fetchProduct)
                
            } else {
                res.status(401).json(fetchProduct.message)
            }
    } catch (error) {
        console.error("Something went Wrong", error);
        
    }
}



// ------------ Create Categories -----------
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

export const fetchCategories = async (req, res,next) => {
    try {
            const fetchCategories =  await productService.fetchCategories(req.body);

            if(fetchCategories.status == 200) {
                console.log("Successfully Fetched!");
                res.status(200).json(fetchCategories.fetchedData.map((items) => items.name))
            }
            else {
                res.status(401).json(fetchCategories.message)
            }
    } catch (error) {
        console.error("Something went Wrong",error);
        
    }
}

