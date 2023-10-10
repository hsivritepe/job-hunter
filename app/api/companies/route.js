import { NextResponse } from 'next/server';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const GET = async () => {
    try {
        const allCompanies = await prisma.companies.findMany();
        return NextResponse.json(
            { companies: allCompanies },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json(
            { error: e.message },
            { status: 500 }
        );
    }
};

const POST = async (req) => {
    const json = await req.json();
    try {
        const created = await prisma.companies.create({
            data: json,
        });
        return NextResponse.json(created, {
            status: 201,
        });
    } catch (e) {
        return NextResponse.json(
            { error: e.message },
            { status: 500 }
        );
    }
};

module.exports = {
    GET,
    POST,
};
