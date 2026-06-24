const oktaJwtVerifier = require("../config/okta");
const env = require("../config/env");
const logger = require("../config/logger");

const authenticate = async (
  req,
  res,
  next
) => {
  try {

    const authHeader =
      req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing",
      });
    }

    const token =
      authHeader.replace("Bearer ", "");

    const jwt =
      await oktaJwtVerifier.verifyAccessToken(
        token,
        env.oktaAudience
      );

    req.user = jwt.claims;

    next();

  } catch (error) {
    console.error("================================");
  console.error("JWT VERIFICATION FAILED");
//   console.error(error);
  logger.error(error);
  console.error("================================");
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });

  }
};

module.exports = authenticate;