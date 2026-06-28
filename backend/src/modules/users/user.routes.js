const express = require("express");

const router = express.Router();

const authenticate =
  require("../../middleware/authenticate");

const authorize =
  require("../../middleware/authorize");

const PERMISSIONS =
  require("../../auth/permissions");

const userController =
  require("./user.controller");

router.get(
  "/",
  authenticate,
  authorize(
    PERMISSIONS.USER_VIEW
  ),
  userController.getUsers
);

router.get(
  "/:id",
  authenticate,
  authorize(
    PERMISSIONS.USER_VIEW
  ),
  userController.getUserById
);

router.post(
  "/",
  authenticate,
  authorize(
    PERMISSIONS.USER_CREATE
  ),
  userController.createUser
);
module.exports = router;