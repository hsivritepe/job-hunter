const Joi = require('joi');

// Company validation schema
const companySchema = Joi.object({
    companyName: Joi.string().required(),
    companyWebsite: Joi.string(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso(),
});

// Jobs validation schema
const jobSchema = Joi.object({
    jobTitle: Joi.string().required(),
    companyId: Joi.number().required(),
    jobLocation: Joi.string().required(),
    jobLink: Joi.string(),
    resumeLink: Joi.string(),
    jobWorkEnv: Joi.string(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso(),
});

// Actions validation schema
const actionSchema = Joi.object({
    userId: Joi.number().required(),
    jobId: Joi.number().required(),
    actionTypeId: Joi.number().required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso(),
});

module.exports = {
    companySchema,
    jobSchema,
    actionSchema,
};
