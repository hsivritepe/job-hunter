import { NextResponse } from 'next/server';
const companyServices = require('../../../services/companyServices');

const GET = async (request, params) => {
    const responseData = await companyServices.getCompanyById(
        params.params.id
    );
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

const PUT = async (body, params) => {
    const responseData = await companyServices.updateCompany(
        body,
        params.params.id
    );
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

const DELETE = async (request, params) => {
    const responseData = await companyServices.deleteCompany(
        params.params.id
    );
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
    PUT,
    DELETE,
};
