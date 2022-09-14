const Roles = require("./role.model");

const getRoles = () => {
  return Roles.find();
};

const createRole = async (req) => {
  const roles = new Roles(req.body);
  return await roles.save();
};

const updateRole = async (req) => {
  const { id } = req.query;
  const role = await Roles.findByIdAndUpdate(id, req.body);
  const roles = await Roles.findById(id);
  return await roles;
};

const deleteRole = async (req) => {
  const { id } = req.params;
  const role = await Roles.findByIdAndDelete(id);
  return await role;
};

const getRoleById = async (req) => {
  const { id } = req.params;
  const role = await Roles.findById(id);
  return await role;
};

module.exports = { createRole, getRoles, updateRole, deleteRole, getRoleById };
