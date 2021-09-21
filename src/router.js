import Router from "express";
import {productsList} from "./services/productsList/index.js";
import {product} from "./services/product/index.js";

export const router = new Router()
router.use('/productsList', productsList)
router.use('/product', product)