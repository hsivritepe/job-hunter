const { NextResponse } = require('next/server');
const actionServices = require('../../services/actionServices');

export async function GET() {
    const responseData = await actionServices.getAllActions();
    if (responseData.status === 'success') {
        return NextResponse.json(
            { actions: responseData.json.message },
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
    const responseData = await actionServices.createAction(req);
    if (responseData.status === 'success') {
        return NextResponse.json(
            { action: responseData.json.message },
            { status: responseData.statusCode }
        );
    } else {
        return NextResponse.json(
            { error: responseData.json.message },
            { status: responseData.statusCode }
        );
    }
}
