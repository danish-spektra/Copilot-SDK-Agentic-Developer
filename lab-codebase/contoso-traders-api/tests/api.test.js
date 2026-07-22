const { test } = require("node:test");
const assert = require("node:assert");
const { calculateTotal, applyDiscount } = require("../lib/cart");

const catalog = [
  { id: 1, price: 10.0 },
  { id: 2, price: 25.5 }
];

test("calculateTotal sums items by quantity", () => {
  const total = calculateTotal(
    [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 }
    ],
    catalog
  );
  assert.strictEqual(total, 45.5);
});

test("calculateTotal skips unknown products", () => {
  const total = calculateTotal([{ productId: 99, quantity: 5 }], catalog);
  assert.strictEqual(total, 0);
});

test("calculateTotal defaults quantity to 1", () => {
  const total = calculateTotal([{ productId: 1 }], catalog);
  assert.strictEqual(total, 10.0);
});

test("applyDiscount applies a known code", () => {
  assert.strictEqual(applyDiscount(100, "MOONLANDING"), 90);
});

test("applyDiscount is case-insensitive", () => {
  assert.strictEqual(applyDiscount(100, "supernova"), 75);
});

test("applyDiscount ignores unknown codes", () => {
  assert.strictEqual(applyDiscount(100, "PLUTO"), 100);
});
