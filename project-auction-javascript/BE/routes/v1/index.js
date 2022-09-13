const express = require("express");
const router = express.Router();
const rolesRoute = require("./roles.routes");

router.use("/roles", rolesRoute);
module.exports = router;
