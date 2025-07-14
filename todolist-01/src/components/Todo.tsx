'use client';
import clsx from 'clsx';
import { BiSolidCheckbox, BiSolidCheckboxChecked } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { TodoProps } from '../components/types';

export const Todo = ({
  id,
  task,
  checked,
  deleteTodoAction,
  updateTodoAction,
  // toggleCheck,
  // deleteTodo,
}: TodoProps) => {
  return (
    <li
      onClick={() => updateTodoAction(id, checked)}
      className={clsx(
        'flex gap-x-1 items-center p-2 rounded border border-transparent cursor-pointer',
        checked ? 'bg-slate-100' : 'bg-violet-100 border border-violet-300'
      )}>
      {checked ? (
        <BiSolidCheckboxChecked className='text-2xl text-slate-400' />
      ) : (
        <BiSolidCheckbox className='text-2xl text-violet-600' />
      )}
      <p className={clsx('w-full text-slate-900 select-none', checked && 'line-through')}>{task}</p>
      <CgClose
        onClick={(e) => {
          e.stopPropagation();
          deleteTodoAction(id);
        }}
        className='text-slate-400 text-xl'
      />
    </li>
  );
};
