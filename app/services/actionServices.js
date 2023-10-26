import { actionSchema } from '../helpers/validationSchema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllActions() {
    try {
        const actions = await prisma.actions.findMany({
            include: {
                user: true,
                job: true,
                action_type: true,
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

export async function createAction(request) {
    try {
        const json = await request.json();
        const validated = await actionSchema.validateAsync(json);
        const created = await prisma.actions.create({
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

export async function getAction(id) {
    try {
        const action = await prisma.actions.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                user: true,
                job: true,
                action_type: true,
            },
        });
        return {
            status: 'success',
            statusCode: 200,
            json: {
                message: action,
            },
        };
    } catch (e) {
        return {
            status: 'error',
            statusCode: 501,
            json: {
                message: e.message,
            },
        };
    }
}

export async function updateAction(body, id) {
    try {
        const json = await body.json();
        const validated = await actionSchema.validateAsync(json);
        const updated = await prisma.actions.update({
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

export async function deleteAction(id) {
    try {
        const deleted = await prisma.actions.delete({
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
