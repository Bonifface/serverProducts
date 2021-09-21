import { productList } from "../../models/productList.js";
import { comment } from "../../models/comment.js";

export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, date } = req.body;
    const createComment = await comment.create({ id, name, description, date });
    await productList.findByIdAndUpdate(
      id,
      {
        $push: { comments: createComment._id },
      },
      { new: true }
    );
    const comments = await comment.find(
      { id: id },
      { name: true, description: true, date: true }
    );
    res.json(comments);
  } catch (e) {
    res.status(500).json(e);
  }
};
