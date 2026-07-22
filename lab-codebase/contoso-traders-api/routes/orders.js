const express = require("express");
const { calculateTotal, applyDiscount } = require("../lib/cart");
const products = require("../data/products.json");

const router = express.Router();

const orders = [];

// TODO: add input validation — quantity should be a positive integer
// and the product must exist. Ops has seen orders for -3 jetpacks.
router.post("/", (req, res) => {
  const { items, discountCode } = req.body;
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "An order needs at least one gadget." });
  }

  let total = calculateTotal(items, products);
  if (discountCode) {
    total = applyDiscount(total, discountCode);
  }

  const order = {
    id: orders.length + 1,
    items,
    total,
    status: "confirmed",
    placedAt: new Date().toISOString()
  };
  orders.push(order);
  res.status(201).json(order);
});

router.get("/", (req, res) => {
  res.json(orders);
});

module.exports = router;
