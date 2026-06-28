// const { useReducer } = require("react");
const {
  oktaRequest,
} = require("./okta.client");
const express = require('express');
const app = express();
app.use(express.json());
const listUsers = async () => {

  return await oktaRequest(
    "/api/v1/users"
  );

};
const getUserById = async (userId) => {
  return await oktaRequest(
    `/api/v1/users/${userId}`
  );
};

const createUser = async (userDetails, activateOptions) => {
  return await oktaRequest(
    `/api/v1/users?activate=${activateOptions.activate}`,{
      method: "POST",
      body:{
        "profile":{
          ...userDetails,
          "login": userDetails.email
        }
      },
    }
  );
};
module.exports = {
  listUsers,
  getUserById,
  createUser,
};
