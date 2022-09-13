const Roles = require("./role.model");

const getRoles = () => {
  return Roles.find();
};
const createRole = async (req) => {
  const roles = new Roles(req.body);
  return await roles.save();
};

const updateRole = async (id, req) => {
  const role = await Roles.findByIdAndUpdate(id, req.body);
  const roles = await Roles.findById(id);
  return await roles;
};

const deleteRole = async (id) => {
  const role = await Roles.findByIdAndDelete(id);
  return await role;
};
module.exports = { createRole, getRoles, updateRole, deleteRole };
