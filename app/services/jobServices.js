import { jobSchema } from '../helpers/validationSchema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllJobs() {
    try {
        const jobs = await prisma.jobs.findMany({
            include: {
                user: true,
                company: true,
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
}

export async function createJob(request) {
    try {
        const json = await request.json();
        const validated = await jobSchema.validateAsync(json);
        const created = await prisma.jobs.create({
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
}

export async function getJobById(id) {
    try {
        const job = await prisma.jobs.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                user: true,
                company: true,
            },
        });
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: job,
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
}

export async function updateJob(body, id) {
    try {
        const json = await body.json();
        const validated = await jobSchema.validateAsync(json);
        const updated = await prisma.jobs.update({
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
}

export async function deleteJob(id) {
    try {
        const deleted = await prisma.jobs.delete({
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
}
