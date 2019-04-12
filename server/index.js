require("dotenv").config();
const express = require("express");
const app = express();
const controller = require("./controller");
const massive = require("massive");

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("Database connected");
});

const PORT = 5050;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
