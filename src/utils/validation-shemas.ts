import Joi from 'joi';

const schemas = {
  loginSchema: Joi.object().keys({
    cni: Joi.string().required(),
    password: Joi.string().alphanum().required(),
  }),

  // define all the other schemas below
};

export { schemas };

// usage

/**
 * body = data to validate
 * schema = schema to match with
 *
 */
// const { error, value } = await loginSchema.validateAsync(body);
// error undefined if validation is successful
// value contains the validated data
