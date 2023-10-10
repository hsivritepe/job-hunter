const Joi = require('joi');

// Company validation schema
const companySchema = Joi.object({
    company_name: Joi.string().required(),
    company_website: Joi.string(),
    created_at: Joi.date().iso(),
    updated_at: Joi.date().iso(),
});

module.exports = {
    companySchema,
};
