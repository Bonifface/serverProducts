import { productList} from "../../models/productList.js";

export const editProduct = async (req, res) => {
  try {
    const { id, name, imageUrl, description, count, size, weight } = req.body;
    const updatedProduct = await productList.findByIdAndUpdate(
      id,
      {
        name: name,
        imageUrl: imageUrl,
        description: description,
        count: count,
        size: size,
        weight: weight,
      },
      { new: true }
    );
    console.log(updatedProduct)
    return res.json(updatedProduct);
  } catch (e) {
    res.status(500).json(e);
  }
};
