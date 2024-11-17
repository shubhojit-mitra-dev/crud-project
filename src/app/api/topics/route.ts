// app/api/topics/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/libs/mongodb';
import Topic from '@/models/topic';

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();

        const body = await request.json();
        const { title, description } = body;

        if (!title || !description) {
            return NextResponse.json(
                { message: 'Title and description are required' },
                { status: 400 }
            );
        }

        const topic = await Topic.create({
            title,
            description,
            createdAt: new Date()
        });

        return NextResponse.json(
            { message: 'Topic created successfully', topicId: topic._id },
            { status: 201 }
        );
    } catch (error) {
        console.error('Failed to create topic:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const topics = await Topic.find({}).sort({ createdAt: -1 });
        return NextResponse.json(topics, { status: 200 });
        
    } catch (error) {
        console.error('Failed to fetch topics:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get('id');
        
        if (!id) {
            return NextResponse.json(
                { message: 'Topic ID is required' },
                { status: 400 }
            );
        }
        await connectToDatabase();
        const deletedTopic = await Topic.findByIdAndDelete(id);

        if (!deletedTopic) {
            return NextResponse.json(
                { message: 'Topic not found' },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { message: 'Topic deleted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Failed to delete topic:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}