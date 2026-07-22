const DISCOUNT_CODES = {
  MOONLANDING: 0.1,
  REDPLANET: 0.15,
  SUPERNOVA: 0.25
};

function calculateTotal(items, catalog) {
  return items.reduce((sum, item) => {
    const product = catalog.find((p) => p.id === item.productId);
    if (!product) return sum;
    return sum + product.price * (item.quantity || 1);
  }, 0);
}

function applyDiscount(total, code) {
  const rate = DISCOUNT_CODES[code.toUpperCase()] || 0;
  // Round to 2 decimals — floating point and money don't mix
  return Math.round(total * (1 - rate) * 100) / 100;
}

module.exports = { calculateTotal, applyDiscount, DISCOUNT_CODES };
