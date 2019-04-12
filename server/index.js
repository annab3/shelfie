require("dotenv").config();
const express = require("express");
const app = express();
const controller = require("./controller");
const massive = require("massive");
const { getProducts, createProduct, deleteProduct } = require("./controller");

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("Database connected");
});

app.get("/api/inventory", getProducts);
app.post("/api/product", createProduct);
app.delete("/api/product/:id", deleteProduct);

const PORT = 5050;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
