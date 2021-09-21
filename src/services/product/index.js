import Router from "express";
import {getOneProduct} from "./getOneProduct.js";
import {editProduct} from "./editProduct.js";
import {addComment} from "./addComment.js";
import {deleteComment} from "./deleteComment.js";

export const product = new Router()
product.get('/:id', getOneProduct)
product.put('/:id', editProduct)
product.post('/:id', addComment)
product.delete('/:id', deleteComment)