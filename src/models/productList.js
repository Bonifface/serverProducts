import mongoose from "mongoose";

const ProductListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  imageUrl: { type: String, required: false },
  count: { type: Number, required: false },
  size: { type: String, required: false },
  weight: { type: String, required: false },
  comments: { type: Array, required: false },
});

export const productList = mongoose.model("ProductList", ProductListSchema);
