'use client'

import InputTodo from '@/components/Input/InputTodo';
import Title from '@/components/Title';

export default function Home() {

  return (
    <div className='flex justify-center items-center h-screen bg-violet-200'>
      <main className='flex flex-col w-[640px] rounded p-8 gap-y-5 bg-white shadow-md'>
        <Title /> 
        <InputTodo />
      </main>
    </div>
  );
}

console.log(first)
