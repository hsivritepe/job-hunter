const { NextResponse } = require('next/server');
const companyServices = require('../../../../services/companyServices');

export async function GET(request, params) {
    const responseData = await companyServices.getJobsByCompanyId(
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
