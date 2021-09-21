import { productList } from "../../models/productList.js";

export const createProductsList = async (req, res) => {
  try {
    const { name, description, imageUrl, count, size, weight } = req.body;
    const products = await productList.create({
      name,
      description,
      imageUrl,
      count,
      size,
      weight,
      comments: []
    });
    res.json(products);
  } catch (e) {
    res.status(500).json(e);
  }
};
