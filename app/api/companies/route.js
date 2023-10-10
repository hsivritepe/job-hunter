import { NextResponse } from 'next/server';
const companyServices = require('../../services/companyServices');

const GET = async () => {
    const responseData = await companyServices.getAllCompanies();
    if (responseData.status === 'success') {
        return NextResponse.json(
            { companies: responseData.json.message },
            { status: responseData.statusCode }
        );
    } else {
        return NextResponse.json(
            { error: responseData.json.message },
            { status: responseData.statusCode }
        );
    }
};

const POST = async (req) => {
    const responseData = await companyServices.createCompany(req);
    if (responseData.status === 'success') {
        return NextResponse.json(
            { company: responseData.json.message },
            { status: responseData.statusCode }
        );
    } else {
        return NextResponse.json(
            { error: responseData.json.message },
            { status: responseData.statusCode }
        );
    }
};

module.exports = {
    GET,
    POST,
};
