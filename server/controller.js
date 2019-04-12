const express = require("express");
const app = express();

const getProducts = (req, res) => {
  req.app
    .get("db")
    .get_inventory()
    .then(result => res.status(200).json(result))
    .catch(error =>
      res.status(500).json({ error: "Something went horribly wrong" })
    );
};

const createProduct = (req, res) => {
  req.app
    .get("db")
    .create_product([req.body.name, req.body.price, req.body.image_url])
    .then(result => res.status(200).json(result))
    .catch(error =>
      res.status(500).json({ error: "Something went horribly wrong" })
    );
};

const deleteProduct = (req, res) => {
  req.app
    .get("db")
    .delete_product(+req.params.id)
    .then(result => res.status(200).json(result))
    .catch(error =>
      res.status(500).json({ error: "Something went horribly wrong" })
    );
};

const updateProduct = (req, res) => {
  req.app
    .get("db")
    .update_product([
      req.body.name,
      req.body.price,
      req.body.image_url,
      +req.params.id
    ])
    .then(result => res.status(200).json(result))
    .catch(error =>
      res.status(500).json({ error: "Something went horribly wrong" })
    );
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct
};
