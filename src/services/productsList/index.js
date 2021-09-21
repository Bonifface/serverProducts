import {Router} from "express";
import {getProductsList} from "./getProducts.js";
import {createProductsList} from "./createProduct.js";
import {deleteProduct} from "./deleteProduct.js";

export const productsList = new Router();
productsList.get('/', getProductsList);
productsList.post('/', createProductsList)
productsList.delete('/:id', deleteProduct)