const { companySchema } = require('../helpers/validationSchema');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllCompanies = async () => {
    try {
        const allCompanies = await prisma.companies.findMany();
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: allCompanies,
            },
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: e.message,
            },
        };
    }
};

const createCompany = async (body) => {
    try {
        const json = await body.json();
        const validated = await companySchema.validateAsync(json);
        const created = await prisma.companies.create({
            data: validated,
        });
        return {
            status: 'success',
            statusCode: 201,
            json: {
                message: created,
            },
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: e.message,
            },
        };
    }
};

// [id] services
const getCompanyById = async (id) => {
    try {
        const company = await prisma.companies.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: company,
            },
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: e.message,
            },
        };
    }
};

const updateCompany = async (body, id) => {
    try {
        const json = await body.json();
        const validated = await companySchema.validateAsync(json);
        const updated = await prisma.companies.update({
            where: {
                id: parseInt(id),
            },
            data: validated,
        });
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: updated,
            },
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: e.message,
            },
        };
    }
};

const deleteCompany = async (id) => {
    console.log(id);
    try {
        const deleted = await prisma.companies.delete({
            where: {
                id: parseInt(id),
            },
        });
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: deleted,
            },
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 500,
            json: {
                message: e.message,
            },
        };
    }
};

module.exports = {
    getAllCompanies,
    createCompany,
    getCompanyById,
    updateCompany,
    deleteCompany,
};
