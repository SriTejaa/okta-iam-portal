const validateRequest = (schema) => {
  return (req, res, next) => {

    const { error, value } = schema.validate(
      req.body,
      {
        abortEarly: false,
        allowUnknown: false,
        stripUnknown: false,
      }
    );

    if (error) {

      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.details.map((detail) => ({
          field: detail.path.join("."),
          message: detail.message,
        })),
      });

    }

    req.body = value;

    next();
  };
};

module.exports = validateRequest;