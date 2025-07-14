export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Todo from '@/models/todo.model';

// ✅ Optional reusable type
type RouteContextWithId = {
  params: {
    id: string;
  };
};

export async function PATCH(
  req: NextRequest,
  context: RouteContextWithId
) {
  try {
    await connectDB();

    const params = context.params;
    const id = params.id;

    const { checked } = await req.json();

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { checked },
      { new: true }
    );

    if (!updatedTodo) {
      return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.error('Error updating todo:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

