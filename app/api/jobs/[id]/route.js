const { NextResponse } = require('next/server');
const jobServices = require('../../../services/jobServices');

export async function GET(request, params) {
    const responseData = await jobServices.getJobById(
        params.params.id
    );
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

export async function PUT(request, params) {
    const responseData = await jobServices.updateJob(
        request,
        params.params.id
    );
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

export async function DELETE(request, params) {
    const responseData = await jobServices.deleteJob(
        params.params.id
    );
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
