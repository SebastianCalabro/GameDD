"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: "get products"
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    res.json({
        msg: "morty"
    });
};
exports.getProduct = getProduct;
