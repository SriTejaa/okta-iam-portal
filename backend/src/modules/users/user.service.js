const logger = require("../../config/logger");
const {
  listUsers,
} = require("../../integrations/users.client");

const usersClient =
  require("../../integrations/users.client");
const {
  mapUser,
} = require("./user.mapper");
const getUsers = async () => {

  const users =
    await listUsers();

  return users;

};

const getUserById = async (userId) => {

  const user =
    await usersClient.getUserById(userId);

  return mapUser(user);

};


const createUser = async (userDetails) => {

  const user =
    await usersClient.createUser(userDetails,{
  activate:false,
});

  return mapUser(user);

};
module.exports = {
  getUsers,
  getUserById,
  createUser,
};