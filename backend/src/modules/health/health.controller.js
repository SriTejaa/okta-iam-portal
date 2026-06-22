const healthService = require("./health.service");
const {
  successResponse,
} = require("../../shared/responses/apiResponse");

const getHealth = (req, res, next) => {
  try {
    const healthData = healthService.getHealth();

    return successResponse(
      res,
      healthData,
      "Service is healthy"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getHealth,
};