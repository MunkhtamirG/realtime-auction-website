const express = require("express");
const app = express();
require("dotenv/config");
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const ATLAS_MONGO_CONNECTION = process.env.ATLAS_MONGO_CONNECTION;
app.use(express.json());
const Roles = require("./role.model");
const roles = express.Router("/roles");

app.get("/roles", (req, res) => {
  res.json({ data: "im here" });
});

app.post("/roles/create", async (req, res) => {
  console.log(req.body);
  const roles = new Roles(req.body);
  try {
    const role = await roles.save();
    res.json({ data: role });
  } catch (error) {
    res.json({ error: error });
  }
});

mongoose.connect(ATLAS_MONGO_CONNECTION).then(() => {
  console.log("Connected to the MongoDB");
  app.listen(PORT, () => {
    console.log("Running at " + PORT);
  });
});
