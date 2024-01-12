const { companySchema } = require('../helpers/validationSchema');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllCompanies = async () => {
    try {
        const allCompanies = await prisma.Company.findMany();
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
        const created = await prisma.Company.create({
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
        const company = await prisma.Company.findUnique({
            where: {
                id: id,
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
        const updated = await prisma.Company.update({
            where: {
                id: id,
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
    try {
        const deleted = await prisma.Company.delete({
            where: {
                id: id,
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

const getJobsByCompanyId = async (id) => {
    try {
        const jobs = await prisma.Job.findMany({
            where: {
                companyId: id,
            },
            include: {
                user: true,
                companies: true,
            },
        });
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: jobs,
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
    getJobsByCompanyId,
};
