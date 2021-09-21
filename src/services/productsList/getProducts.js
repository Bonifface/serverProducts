import { productList } from "../../models/productList.js";

export const getProductsList = async (req, res) => {
  try {
    const data = await productList.find(
      {},
      { name: true, description: true, count: true, imageUrl: true, _id: true }
    );
    return res.json(data);
  } catch (e) {
    res.status(500).json(e);
  }
};
