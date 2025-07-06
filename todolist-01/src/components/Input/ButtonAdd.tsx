'use client';
import clsx from 'clsx';
import { BiPlus } from 'react-icons/bi';
import { ButtonAddProps } from '../types';

export const ButtonAdd = ({ active, onAddTodo }: ButtonAddProps) => {
  return (
    <button
      onClick={onAddTodo}
      type='submit'
      className={clsx(
        'flex rounded py-1 px-2 items-center',
        !active
          ? 'bg-slate-300 text-slate-600 disabled'
          : 'bg-violet-700 text-white font-bold cursor-pointer'
      )}>
      {active && <BiPlus />}
      <p>Add</p>
    </button>
  );
};
