const { NextResponse } = require('next/server');
const jobServices = require('../../../../services/jobServices');

export async function GET(request, params) {
    const responseData = await jobServices.getActionsByJobId(
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
