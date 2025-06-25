import React from 'react';
import { InputTextProps } from '../types';

export const InputText = ({ inputText, handleChange }: InputTextProps) => {
  return (
    <input
      type='text'
      value={inputText}
      onChange={handleChange}
      placeholder='Add a new todo'
      className='p-2 border-b border-slate-300 text-slate-600 w-full focus:outline-0'
    />
  );
};
