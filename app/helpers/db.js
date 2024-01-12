const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const globalForPrisma = global;
const db = globalForPrisma.prisma || prisma;

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

module.exports = db;
