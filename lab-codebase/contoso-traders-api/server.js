const express = require("express");

const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    shop: "Contoso Traders - Galactic Gadget Shop",
    motto: "Gadgets so good, they're out of this world.",
    endpoints: ["/api/products", "/api/orders"]
  });
});

app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

// TODO: add request logging middleware before the pilot review
// TODO: add a /health endpoint for the ops team

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Galactic Gadget Shop API launched on port ${PORT}`);
  });
}

module.exports = app;
