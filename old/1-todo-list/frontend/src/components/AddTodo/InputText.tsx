import { type ChangeEvent } from 'react';
import type { InputTextProps } from './types';

export const InputText = ({ inputValue, setInputValue }: InputTextProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
	};
	return (
		<input
			type='text'
			onChange={handleChange}
			value={inputValue}
			placeholder='Add a new Todo'
			className='w-full px-4 py-2 border-b border-slate-300 text-slate-600 focus:outline-none focus:shadow-bottom'
		/>
	);
};
