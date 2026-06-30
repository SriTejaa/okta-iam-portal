// const { useReducer } = require("react");
const {
  oktaRequest,
} = require("./okta.client");
const express = require('express');
const app = express();
app.use(express.json());

const LIFECYCLE_ENDPOINTS = {

  ACTIVATE:
    "/lifecycle/activate",

  SUSPEND:
    "/lifecycle/suspend",

  UNSUSPEND:
    "/lifecycle/unsuspend",

  DEACTIVATE:
    "/lifecycle/deactivate",

  REACTIVATE:
    "/lifecycle/reactivate",

};


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

const updateUser = async (
  userId,
  userDetails
) => {

  return await oktaRequest(
    `/api/v1/users/${userId}`,
    {
      method: "POST",
      body: {
        profile: {
          ...userDetails,
          login: userDetails.email,
        },
      },
    }
  );

};

const executeLifecycleAction = async (
  userId,
  action
) => {

  return await oktaRequest(
    `/api/v1/users/${userId}${LIFECYCLE_ENDPOINTS[action]}`,
    {
      method: "POST",
    }
  );

};
module.exports = {
  listUsers,
  getUserById,
  createUser,
  updateUser,
  executeLifecycleAction,
};
