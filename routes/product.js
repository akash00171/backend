const express = require('express');
const Product = require('../model/productModel');
const router = express.Router();

// Routes
// =========== Get all Products ============
router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ msg: err });
    }
});

// =========== Add Product =================
router.post("/add-product", async (req, res) => {
    try {
        let product = new Product(req.body);
        let result = await product.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ msg: err });
    }
});

// ========== Update Product ===============
router.put('/update-product/:id', async (req, res) => {
    try {
        let productId = req.params.id;
        let product = await Product.findByIdAndUpdate(productId, req.body, { new: true });

        if (!product) {
            return res.status(404).json({
                msg: "Product Not Found"
            });
        }

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ msg: err });
    }
});

// =========== Delete Product ==============
router.delete('/delete-product/:id', async (req, res) => {
    try {
        let productId = req.params.id;
        let product = await Product.findByIdAndDelete(productId);

        if (!product) {
            return res.status(404).json({
                msg: "Product Not Found"
            });
        }

        res.status(200).json({ msg: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ msg: err });
    }
});

module.exports = router;
