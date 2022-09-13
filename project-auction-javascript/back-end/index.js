const express = require("express");
const app = express();
require("dotenv/config");
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const ATLAS_MONGO_CONNECTION = process.env.ATLAS_MONGO_CONNECTION;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const routes = require("./routes/v1");
app.use("/v1", routes);

mongoose.connect(ATLAS_MONGO_CONNECTION).then(() => {
  console.log("Connected to the MongoDB");
  app.listen(PORT, () => {
    console.log("Running at " + PORT);
  });
});
