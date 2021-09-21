import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  id: {type: mongoose.Types.ObjectId},
  name: { type: String, required: false },
  description: { type: String, required: false },
  date: { type: String, required: false },
});

export const comment = mongoose.model("Comment", CommentSchema);