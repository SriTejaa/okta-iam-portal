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
console.log("AUTHENTICATE PASSED");
    next();

  } catch (error) {
    logger.error("================================");
  logger.error("JWT VERIFICATION FAILED");
//   console.error(error);
  console.error("FULL ERROR:");
console.dir(error, { depth: null });
  logger.error("================================");
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });

  }
};

module.exports = authenticate;