const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function cleanup() {
    try {
        // Delete all actions first (due to foreign key constraints)
        console.log('Deleting all actions...');
        await prisma.action.deleteMany({});

        // Delete all jobs
        console.log('Deleting all jobs...');
        await prisma.job.deleteMany({});

        // Delete all companies
        console.log('Deleting all companies...');
        await prisma.company.deleteMany({});

        console.log('Cleanup completed successfully!');
    } catch (error) {
        console.error('Error during cleanup:', error);
    } finally {
        await prisma.$disconnect();
    }
}

cleanup();
