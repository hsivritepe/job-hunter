const { NextResponse } = require('next/server');
const jobServices = require('../../services/jobServices');

export async function GET() {
    const responseData = await jobServices.getAllJobs();
    console.log(
        'API Response Data:',
        JSON.stringify(responseData, null, 2)
    );

    if (responseData.status === 'success') {
        const response = { jobs: responseData.json.message };
        console.log(
            'Sending Response:',
            JSON.stringify(response, null, 2)
        );
        return NextResponse.json(response, {
            status: responseData.statusCode,
        });
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
