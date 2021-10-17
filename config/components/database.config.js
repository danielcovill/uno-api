'use strict';

const joi = require('joi');

/**
 * Generate a validation schema using joi to check the type of your environment variables
 */
const envSchema = joi
  .object({
    PGUSER: joi.string(),
    PGHOST: joi.string(),
    PGPASSWORD: joi
      .string()
      .optional()
      .empty(''),
    PGDATABASE: joi.string(),
    PGPORT: joi.number(),
  })
  .unknown()
  .required();

/**
 * Validate the env variables using joi.validate()
 */
const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  databaseConfig: {
    user: envVars.PGUSER,
    host: envVars.PGHOST,
    password: envVars.PGPASSWORD,
    database: envVars.PGDATABASE,
    port: envVars.PGPORT,
  },
};

module.exports = config;
