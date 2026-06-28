const express = require("express");

const router = express.Router();

const healthRoutes = require("../modules/health/health.routes");

router.use("/health", healthRoutes);

const userRoutes = require("../modules/users/user.routes");

router.use(
  "/api/users",
  userRoutes
);
module.exports = router;