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

const validateRequest =
  require("../../middleware/validateRequest");

const {
  createUserSchema,
  userLifecycleSchema,
} = require("../../validations/user.validation");
const updateUserSchema = createUserSchema;

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
  validateRequest(createUserSchema),
  userController.createUser
);

router.patch(
  "/:id",
  authenticate,
  authorize(
    PERMISSIONS.USER_UPDATE
  ),
  validateRequest(updateUserSchema),
  userController.updateUser
);

router.post(
  "/:id/lifecycle",
  authenticate,
  authorize(
    PERMISSIONS.USER_UPDATE 
  ),
  validateRequest(userLifecycleSchema),
  userController.performLifecycleAction
);
module.exports = router;