const Joi = require('joi');

// Company validation schema
const companySchema = Joi.object({
    company_name: Joi.string().required(),
    company_website: Joi.string(),
    created_at: Joi.date().iso(),
    updated_at: Joi.date().iso(),
});

// Jobs validation schema
const jobSchema = Joi.object({
    job_title: Joi.string().required(),
    company_id: Joi.number().required(),
    job_location: Joi.string().required(),
    job_link: Joi.string(),
    resume_link: Joi.string(),
    job_work_env: Joi.string(),
    created_at: Joi.date().iso(),
    updated_at: Joi.date().iso(),
});

module.exports = {
    companySchema,
    jobSchema,
};
