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
// const { data, error } = Joi.validate(body, loginSchema);
// error undefined if valid

// middleware function
// const validationMiddleware = (schema, property) => {
//   return (req, res, next) => {
//     const { error } = Joi.validate(req.body, schema);
//     const valid = error == null;

//     if (valid) {
//       next();
//     } else {
//       const { details } = error;
//       const message = details.map((i) => i.message).join(',');

//       console.log('error', message);
//       res.status(422).json({ error: message });
//     }
//   };
// };
