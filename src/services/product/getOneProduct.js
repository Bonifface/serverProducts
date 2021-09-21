import { productList } from "../../models/productList.js";
import { comment } from "../../models/comment.js";

export const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productList.findById(id, {
      name: true,
      description: true,
      imageUrl: true,
      count: true,
      size: true,
      weight: true,
    });
    const comments = await comment.find(
      { id: id },
      { name: true, description: true, date: true, id: true }
    );
    return res.json({ product, comments });
  } catch (e) {
    res.status(500).json(e);
  }
};
