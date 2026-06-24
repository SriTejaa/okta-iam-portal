// src/middleware/authorize.js

const {
  getPermissionsByRole,
} = require("../auth/permissionResolver");
const logger = require("../config/logger");

const authorize = (requiredPermission) => {
  return (req, res, next) => {
    try {
      const userRoles = req.user?.groups || [];

      const userPermissions = [
        ...new Set(
          userRoles.flatMap((role) =>
            getPermissionsByRole(role)
          )
        ),
      ];

      const hasPermission =
        userPermissions.includes(
          requiredPermission
        );

      if (!hasPermission) {
        return res.status(403).json({
          success: false,
          message: "Access Denied",
        });
      }

      next();
    } catch (error) {

//   console.error("JWT Verification Error:", error);
//   logger.error("JWT Verification Error:", error);

  return res.status(401).json({
    success: false,
    message: "Invalid or expired token",
  });

}
  };
};

module.exports = authorize;