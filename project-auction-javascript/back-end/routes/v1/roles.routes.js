const express = require("express");
const router = express.Router();
const rolesController = require("../../modules/roles");

router.get("/", rolesController.getRoles);
router.post("/create", rolesController.createRole);
router.put("/update", rolesController.updateRole);
router.delete("/delete/:id", rolesController.deleteRole);
router.get("/:id", rolesController.getRoleById);

module.exports = router;
