const express = require("express");

const router = express.Router();

const healthController = require("./health.controller");

const authorize = require("../../middleware/authorize.js");
const PERMISSIONS = require("../../auth/permissions");

router.get("/", healthController.getHealth);

module.exports = router;

const authenticate =
  require("../../middleware/authenticate");

router.get(
  "/secure",
  authenticate,
  authorize(PERMISSIONS.ACCESS_REQUEST_VIEW),
  (req, res) => {

    res.json({
      user: req.user,
    });

  }
);

router.get("/test-okta", async (req, res) => {
  try {

    const response = await fetch(
      "https://integrator-9643035.okta.com/oauth2/aus13v5ey6tB2HtpO698/v1/keys"
    );

    const data = await response.json();

    res.json(data);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }
});
