import mongoose from "mongoose";
import {productList} from "../../models/productList.js";
import {comment} from "../../models/comment.js";

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { listId } = req.body;
    if (!id) {
      res.status(400).json({ message: "ID is not specified" });
    }
    await productList.findOneAndUpdate(
      { _id: listId },
      { $pull: { comments: mongoose.Types.ObjectId(id) } },
      { new: true }
    );
    const delComment = await comment.findOneAndDelete({ _id: id });
    return res.json(delComment);
  } catch (e) {
    res.status(500).json(e);
  }
};