const Joi = require("joi");

const createUserSchema = Joi.object({

  firstName: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .required(),

  lastName: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .required(),

  email: Joi.string()
    .trim()
    .lowercase()
    .email()
    .required(),

});

const userLifecycleSchema = Joi.object({

  action: Joi.string()
    .valid(
      "ACTIVATE",
      "SUSPEND",
      "UNSUSPEND",
      "DEACTIVATE",
      "REACTIVATE"
    )
    .required(),

});

module.exports = {
  createUserSchema,
  userLifecycleSchema,
};