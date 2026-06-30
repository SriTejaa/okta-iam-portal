const userService = require("./user.service");

const {
  successResponse,
} = require("../../shared/responses/apiResponse");

const lifecycleMessages = {
  ACTIVATE: "User activated successfully",
  SUSPEND: "User suspended successfully",
  UNSUSPEND: "User unsuspended successfully",
  DEACTIVATE: "User deactivated successfully",
  REACTIVATE: "User reactivated successfully",
};

const getUsers = async (
  req,
  res,
  next
) => {
  try {

    const users =
      await userService.getUsers();
      console.log("CONTROLLER HIT");

    return successResponse(
      res,
      users,
      "Users fetched successfully"
    );

  } catch (error) {
    next(error);
  }
};

const getUserById = async (
  req,
  res,
  next
) => {
  try {

    const { id } = req.params;

    const user =
      await userService.getUserById(id);

    return successResponse(
      res,
      user,
      "User fetched successfully"
    );

  } catch (error) {
    next(error);
  }
};

const createUser = async (
  req,
  res,
  next
) => {
  try {

    const user =
      await userService.createUser(req.body);

    return successResponse(
      res,
      user,
      "User Created successfully",
      201
    );

  } catch (error) {
    next(error);
  }
};

const updateUser = async (
  req,
  res,
  next
) => {
  try {

    const user =
      await userService.updateUser(
        req.params.id,
        req.body
      );

    return successResponse(
      res,
      user,
      "User updated successfully"
    );

  } catch (error) {
    next(error);
  }
};

const performLifecycleAction = async (
  req,
  res,
  next
) => {
  try {

    const user =
      await userService.performLifecycleAction(
        req.params.id,
        req.body.action
      );

    return successResponse(
      res,
      user,
     lifecycleMessages[action]
    );

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  performLifecycleAction,
};