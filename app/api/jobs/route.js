const { NextResponse } = require('next/server');
const jobServices = require('../../services/jobServices');

export async function GET() {
    const responseData = await jobServices.getAllJobs();
    if (responseData.status === 'success') {
        return NextResponse.json(
            { jobs: responseData.json.message },
            { status: responseData.statusCode }
        );
    } else {
        return NextResponse.json(
            { error: responseData.json.message },
            { status: responseData.statusCode }
        );
    }
}

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
