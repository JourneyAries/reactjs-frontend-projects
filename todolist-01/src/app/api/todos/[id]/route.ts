import { connectDB } from '@/lib/mongodb';
import { Todo } from '@/models/Todo';
import { NextResponse } from 'next/server';

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  try {
    const { id } = params;
    const deleted = await Todo.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Todo Delete' });
  } catch (error) {
    return NextResponse.json({ error: 'Error while DELETE Todo' }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  try {
    const { id } = params;
    const body = await req.json();
    const updated = await Todo.findOneAndUpdate(
      { _id: id },
      { checked: body.checked },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Todo not Found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update todo' }, { status: 500 });
  }
}
