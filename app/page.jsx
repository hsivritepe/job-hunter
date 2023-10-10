import Image from 'next/image';

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export default function Home() {
    {
        async function main() {
            const allUsers = await prisma.companies.findMany();
            console.log(allUsers);
        }

        main()
            .then(async () => {
                await prisma.$disconnect();
            })
            .catch(async (e) => {
                console.error(e);
                await prisma.$disconnect();
                process.exit(1);
            });
    }
}
