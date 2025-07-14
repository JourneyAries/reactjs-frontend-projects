import { connectDB } from '@/lib/mongodb';
import Todo from '@/models/todo.model';
import { NextResponse } from 'next/server';

export async function GET(){
  await connectDB();
  
  const todos = await Todo.find().sort({checked: 1})

  const normalized = todos.map((todo) => ({
    id: todo._id.toString(),
    todo: todo.todo,
    checked: todo.checked
  }))
  
  return NextResponse.json(normalized)
};
