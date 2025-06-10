const { NextResponse } = require('next/server');
const jobServices = require('../../services/jobServices');
const companyServices = require('../../services/companyServices');

export async function POST(req) {
    const responseData = await jobServices.createJob(req);
    if (responseData.status === 'success') {
        return NextResponse.json(
            { job: responseData.json.message },
            { status: responseData.statusCode }
        );
    } else {
        return NextResponse.json(
            { error: responseData.json.message },
            { status: responseData.statusCode }
        );
    }
}
