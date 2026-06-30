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

const updateUser = async (
  userId,
  userDetails
) => {

  const user =
    await usersClient.updateUser(
      userId,
      userDetails
    );

  return mapUser(user);

};

const performLifecycleAction = async (
  userId,
  action
) => {

  await usersClient.executeLifecycleAction(
      userId,
      action
    );

    const user =
    await usersClient.getUserById(userId); // to get latest user info

  return mapUser(user);

};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  performLifecycleAction,
};