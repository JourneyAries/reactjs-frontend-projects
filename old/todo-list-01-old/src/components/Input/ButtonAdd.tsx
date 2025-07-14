'use client'

import clsx from 'clsx';
import { BiPlus } from 'react-icons/bi';

type ButtonAddProps = {
  active: boolean;
}

const ButtonAdd = ({active}:ButtonAddProps) => {
  return (
    <button
      type='submit'
      className={clsx(
        'flex items-center rounded-sm py-1 px-2 ',
        active
          ? 'font-bold text-white bg-violet-700'
          : 'bg-slate-300 text-slate-500'
      )}>
      <BiPlus className={clsx('text-2xl', active ? 'block' : 'hidden')} />
      <p>Add</p>
    </button>
  );
};

export default ButtonAdd;
