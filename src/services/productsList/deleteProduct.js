import { productList } from "../../models/productList.js";
import { comment } from "../../models/comment.js";

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "ID is not specified" });
    }
    await productList.findByIdAndDelete(id);
    await comment.deleteMany({ id: id });
    return res.json(id);
  } catch (e) {
    res.status(500).json(e);
  }
};
