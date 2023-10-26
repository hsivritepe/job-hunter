const { NextResponse } = require('next/server');
const actionServices = require('../../../services/actionServices');

export async function GET(request, params) {
    const responseData = await actionServices.getAction(
        params.params.id
    );
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

export async function PUT(request, params) {
    const responseData = await actionServices.updateAction(
        request,
        params.params.id
    );
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

export async function DELETE(request, params) {
    const responseData = await actionServices.deleteAction(
        params.params.id
    );
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
