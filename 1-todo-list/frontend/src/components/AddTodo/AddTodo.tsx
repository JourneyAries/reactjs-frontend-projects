import { useState, type FormEvent } from 'react';
import { ButtonAdd } from './ButtonAdd';
import { InputText } from './InputText';
import { useTodo } from '../../hook/useTodo';

export const AddTodo = () => {
	const [inputValue, setInputValue] = useState<string>('');
	const { addTodo } = useTodo();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputValue.length >= 5) {
			addTodo(inputValue);
			setInputValue('');
		}
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='flex gap-x-3'>
			<InputText
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			<ButtonAdd active={inputValue.length >= 5} />
		</form>
	);
};
