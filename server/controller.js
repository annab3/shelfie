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

module.exports = {
  getProducts
};
