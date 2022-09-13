const rolesServices = require("./roles.services");

const getRoles = async (req, res) => {
  const roles = await rolesServices.getRoles();
  res.json({ data: roles });
};

const createRole = async (req, res) => {
  try {
    const role = await rolesServices.createRole(req);
    res.json({ data: role });
  } catch (error) {
    res.json({ error: error });
  }
};

const updateRole = async (req, res) => {
  const { id } = req.query;
  const roles = await rolesServices.updateRole(id, req);
  res.json({ date: roles });
};

const deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    const roles = await rolesServices.deleteRole(id);
    await res.json({ success: true, data: roles });
  } catch (error) {
    res.json({ success: false, data: error });
  }
};

module.exports = { getRoles, createRole, updateRole, deleteRole };
