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
  const roles = await rolesServices.updateRole(req);
  res.json({ date: roles });
};

const deleteRole = async (req, res) => {
  try {
    const roles = await rolesServices.deleteRole(req);
    await res.json({ success: true, data: roles });
  } catch (error) {
    res.json({ success: false, data: error });
  }
};

const getRoleById = async (req, res) => {
  try {
    const roles = await rolesServices.getRoleById(req);
    await res.json({ success: true, data: roles });
  } catch (error) {
    res.json({ success: false, data: error });
  }
};

module.exports = { getRoles, createRole, updateRole, deleteRole, getRoleById };
