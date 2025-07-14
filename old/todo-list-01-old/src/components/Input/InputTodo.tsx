'use client'

import { useState } from 'react';
import ButtonAdd from './ButtonAdd';
import InputText from './InputText';
import Todo from '../Todo';
import Tab from '../Tab';
import { useGetTodosQuery, useToggleCheckedMutation } from '@/services/todosApi';

type Todo = {
  id: string;
  todo: string;
  checked: boolean;
};

const InputTodo = () => {
  const {data: todos = [], error, isLoading} = useGetTodosQuery();
  const [toggleCheckedMutation] = useToggleCheckedMutation();

  const [inputText, setInputText] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'all' | 'completed'>('all');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit: ', inputText)
    setInputText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputText(value);
  };

  const toggleChecked = async (id: string, checked: boolean) => {
    try{
      await toggleCheckedMutation({id, checked: !checked}).unwrap();
    }catch(error: any){
      console.error('Error toggling checked state: ', error?.data || error || 'Unknown error')
    }
  };

  const todoDeleted = (id: string) => {
    console.log('deleting todo')
/*     setTodoData((prevTodoData) =>
      prevTodoData.filter((todo) => todo.id !== id)
    ); */
  };

  const filteredTodos =
    activeTab === 'completed'
      ? todos.filter((todo) => todo.checked)
      : todos;

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error loading todos</p>

  return (
    <>
      <form onSubmit={handleSubmit} className='flex gap-x-2'>
        <InputText inputText={inputText} handleChange={handleChange} />
        <ButtonAdd active={inputText.length >= 5} />
      </form>
      <div className='flex gap-x-2'>
        <Tab
          text='All Task'
          count={todos.length}
          isActive={activeTab === 'all'}
          handleTab={() => setActiveTab('all')}
        />
        <Tab
          text='Completed'
          count={todos.filter((todo) => todo.checked === true).length}
          isActive={activeTab === 'completed'}
          handleTab={() => setActiveTab('completed')}
        />
      </div>
      <div className='flex flex-col gap-y-2'>
        {[...filteredTodos]
          .sort((a, b) => Number(a.checked) - Number(b.checked))
          .map((todo, index) => (
            <Todo
              key={index}
              id={todo.id}
              todo={todo.todo}
              checked={todo.checked}
              toggleChecked={()=>toggleChecked(todo.id, todo.checked)}
              todoDeleted={todoDeleted}
            />
          ))}
      </div>
    </>
  );
};

export default InputTodo;
