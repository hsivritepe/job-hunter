import { NextResponse } from 'next/server';
const companyServices = require('@/app/services/companyServices');

export async function GET(request, { params }) {
    const responseData = await companyServices.getJobsByCompanyId(
        params.id
    );
    if (responseData.status === 'success') {
        return NextResponse.json(
            { job: responseData.json.message },
            { status: responseData.statusCode }
        );
    }
    return NextResponse.json(
        { error: responseData.json.message },
        { status: responseData.statusCode }
    );
}
