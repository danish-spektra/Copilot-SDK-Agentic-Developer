const express = require("express");
const products = require("../data/products.json");

const router = express.Router();

// TODO: add pagination — the catalog is growing fast since the Mars expansion
router.get("/", (req, res) => {
  const { category } = req.query;
  const result = category
    ? products.filter((p) => p.category === category)
    : products;
  res.json(result);
});

router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ error: "Gadget not found in this galaxy." });
  }
  res.json(product);
});

module.exports = router;
