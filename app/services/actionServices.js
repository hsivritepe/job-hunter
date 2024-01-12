import { actionSchema } from '../helpers/validationSchema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllActions() {
    try {
        const actions = await prisma.Action.findMany({
            include: {
                user: true,
                job: {
                    include: {
                        companies: true,
                    },
                },
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
                message: 'get all actions: ' + e.message,
            },
        };
    }
}

export async function createAction(request) {
    try {
        const json = await request.json();
        const validated = await actionSchema.validateAsync(json);
        const created = await prisma.Action.create({
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
        const action = await prisma.Action.findUnique({
            where: {
                id: id,
            },
            include: {
                User: true,
                Job: true,
                ActionType: true,
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
                message: 'get action: ' + e.message,
            },
        };
    }
}

export async function updateAction(body, id) {
    try {
        const json = await body.json();
        const validated = await actionSchema.validateAsync(json);
        const updated = await prisma.Action.update({
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

export async function deleteAction(id) {
    try {
        const deleted = await prisma.Action.delete({
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
