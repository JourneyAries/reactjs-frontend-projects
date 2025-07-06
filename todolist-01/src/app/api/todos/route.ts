import { connectDB } from '@/lib/mongodb';
import { normalizedArray } from '@/lib/normalize';
import { Todo } from '@/models/Todo';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  try {
    const todos = await Todo.find().lean();
    return NextResponse.json(normalizedArray(todos));
  } catch (error) {
    return NextResponse.json({ error: 'Error while GET todos' }, { status: 400 });
  }
}

export async function POST(req: Request) {
  await connectDB();
  try {
    const body = await req.json();
    const { task, checked = false } = body;

    if (!task || typeof task !== 'string') {
      return NextResponse.json({ error: 'Invalid task' }, { status: 400 });
    }

    const newTodo = new Todo({ task, checked });
    await newTodo.save();

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error while POST todo' }, { status: 500 });
  }
}
