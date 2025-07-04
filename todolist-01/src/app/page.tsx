'use client';

import { Input } from '@/components/Input/Input';
import { TodoItem } from '@/components/types';
import { Tab } from '@/components/Tab/Tab';
import { Title } from '@/components/Title';
import { Todo } from '@/components/Todo';
import React, { useState } from 'react';
import { v4 as generateId } from 'uuid';

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', task: 'mandi', checked: false },
    { id: '2', task: 'makan', checked: true },
  ]);

  const [inputText, setInputText] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const toggleCheck = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const todoAdd = () => {
    setTodos((prev) => [
      ...prev,
      { id: generateId(), task: inputText, checked: false },
    ]);
    setInputText('');
  };

  return (
    <div className='flex items-center justify-center h-screen bg-violet-200'>
      <main className='flex flex-col gap-y-5 bg-white rounded p-8 w-[640px]'>
        <Title />
        <Input
          inputText={inputText}
          handleChange={handleChange}
          active={inputText.length >= 5}
          todoAdd={todoAdd}
        />
        <div className='flex'>
          <Tab counter={todos.length} />
        </div>

        <ul className='flex flex-col gap-y-2'>
          {[...todos]
            .sort((a, b) => Number(a.checked) - Number(b.checked))
            .map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                checked={todo.checked}
                toggleCheck={toggleCheck}
                deleteTodo={deleteTodo}
              />
            ))}
        </ul>
      </main>
    </div>
  );
}
