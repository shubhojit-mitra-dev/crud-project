import { NextResponse } from 'next/server';
import connectToDatabase from '@/libs/mongodb';
import Topic from '@/models/topic';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {

        const { id } = params;
        const { title, description } = await request.json();

        if (!id || !title || !description) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        await connectToDatabase();
        const updatedTopic = await Topic.findByIdAndUpdate(
            id,
            { title, description, updatedAt: new Date() },
            { new: true }
        );
        if (!updatedTopic) {
            return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
        }
        return NextResponse.json(updatedTopic, { status: 200 });

    } catch (error) {

        console.error('Error updating topic:', error);
        return NextResponse.json({ 
            error: 'Failed to update topic', 
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        
        if (!id) {
            return NextResponse.json(
                { error: 'Topic ID is required' },
                { status: 400 }
            );
        }

        await connectToDatabase();
        const topic = await Topic.findById(id);

        if (!topic) {
            return NextResponse.json(
                { error: 'Topic not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(topic, { status: 200 });

    } catch (error) {
        console.error('Error fetching topic:', error);
        return NextResponse.json(
            { error: 'Failed to fetch topic' },
            { status: 500 }
        );
    }
}