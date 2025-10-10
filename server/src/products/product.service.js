import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ---------Create Product -----------
export const createProduct = async (data) => {
  const { name, description, price, categorieId, variantName, color, size } =
    data;
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
              size: size,
            },
          ],
        },
      },
    });
    if (!productCreate) {
      return { status: 401, message: "Product not Created!" };
    }

    return { status: 200, message: "!!Product successfully Created!!" };
  } catch (error) {
    console.error("Something Went Wrong: ", error);
    return { status: 404, message: "Something Went Wrong" };
  }
};
// ---------Get Product-----------

export const fetchProduct = async (search) => {
//   const productName = req.query.search;
  console.log(search);
  let fetchProduct;

  try {
    if (search) {
      fetchProduct = await prisma.product.findMany({
        where: {
          name: search,
        },
      });
    } else {
      fetchProduct = await prisma.product.findMany();
    }

    if (fetchProduct) {
      return { status: 200, fetchProduct };
    } else {
      return { status: 401, message: "Couldn't Fetch!!" };
    }
  } catch (error) {}
};

//  ----------Create Categories------------
export const categories = async (data) => {
  const { name } = data;
  console.log("Categories endpoint hit");

  try {
    const categoriesCreation = await prisma.categories.create({
      data: {
        name: name,
      },
    });
    if (!categoriesCreation) {
      return { status: 401, message: "Categories Not Created." };
    }
    return { status: 200, message: "Categories Created!" };
  } catch (error) {
    console.error("Something Went Wrong:", error);
    return { status: 500, message: "Something Went Wrong." };
  }
};

// -------------------Fetch Categories-------------
export const fetchCategories = async () => {
  try {
    const fetchedData = await prisma.categories.findMany();
    console.log(fetchedData);

    if (fetchedData) {
      return { status: 200, fetchedData };
    } else {
      return { status: 401, message: "No Categories Available" };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Something went Wrong! from Database" };
  }
};
