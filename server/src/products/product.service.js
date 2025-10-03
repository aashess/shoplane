
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export const createProduct = async  (data)  => {
        const {name, description, price, categorieId, variantName, color, size} = data;
        try {
            const productCreate = await prisma.product.create({
                data: {
                    name: name,
                    description: description,
                    price: price,
                    category: { connect: { id: 1 } }, // existing category ID
                    variants: {
                        create: [
                            {
                                variantName: variantName,
                                color: color,
                                size: size
                            }
                        ]
                    }
                    
                }
            })
            if (!productCreate) {
                return {status: 401, message: "Product not Created!"}
            }
            
            return {status: 200, message: "!!Product successfully Created!!"}

        } catch (error) {
            console.error("Something Went Wrong: ", error);
            return {status: 404, message: "Something Went Wrong"}
            
        }
        
}

export const categories = async (data) => {
        const {name} = data
        console.log("Categories endpoint hit");

    try {
        const categoriesCreation = await prisma.categories.create({
                    data: {
                        name: name
                    },
            })
        if (!categoriesCreation) {
            return {status: 401, message: "Categories Not Created."}
        }
        return {status: 200, message: "Categories Created!"}
    } catch (error) {
        console.error("Something Went Wrong:", error)
        return {status: 500, message: "Something Went Wrong."}
    }    

}