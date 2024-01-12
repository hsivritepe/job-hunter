import { jobSchema } from '../helpers/validationSchema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllJobs() {
    try {
        const jobs = await prisma.Job.findMany({
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
                message: `get all jobs error: ${e.message}`,
            },
        };
    }
}

export async function createJob(request) {
    try {
        const json = await request.json();
        const validated = await jobSchema.validateAsync(json);
        const created = await prisma.Job.create({
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

export async function getJob(id) {
    try {
        const job = await prisma.Job.findUnique({
            where: {
                id: id,
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
        const updated = await prisma.Job.update({
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
}

export async function deleteJob(id) {
    try {
        const deleted = await prisma.Job.delete({
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
}

export async function getActionsByJobId(id) {
    try {
        const actions = await prisma.Action.findMany({
            where: {
                jobId: id,
            },
            include: {
                actionTypes: true,
            },
        });
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: actions,
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
