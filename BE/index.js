const express = require("express");
const app = express();
require("dotenv/config");
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const ATLAS_MONGO_CONNECTION = process.env.ATLAS_MONGO_CONNECTION;
app.use(express.json());
const Roles = require("./role.model");
const roles = express.Router("/roles");

app.get("/roles", async (req, res) => {
  const roles = await Roles.find();
  res.json({ data: roles });
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

app.put("/roles/update", async (req, res) => {
  const { id } = req.query;
  const role = await Roles.findByIdAndUpdate(id, req.body);
  const roles = await Roles.findById(id);
  res.json({ date: roles });
});

mongoose.connect(ATLAS_MONGO_CONNECTION).then(() => {
  console.log("Connected to the MongoDB");
  app.listen(PORT, () => {
    console.log("Running at " + PORT);
  });
});
