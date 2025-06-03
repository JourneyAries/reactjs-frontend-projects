import { useState } from 'react';
import type { ChildrenWithProps } from '../../types';
import type { Todo } from '../types';
import { TodoContext } from './TodoContext';

export const TodoProvider = ({ children }: ChildrenWithProps) => {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, text: 'Belajar React', checked: true },
		{ id: 2, text: 'Membuat project Todo', checked: true },
		{ id: 3, text: 'Baca dokumentasi clsx', checked: true },
		{ id: 4, text: 'Explore react-icons', checked: false },
		{ id: 5, text: 'Deploy aplikasi', checked: true },
	]);

	const addTodo = (text: string) => {
		setTodos((prev) => [
			...prev,
			{ id: prev.length + 1, text, checked: false },
		]);
	};

	const toggleTodo = (id: number) => {
		setTodos((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, checked: !item.checked } : item,
			),
		);
	};

	const value = {
		todos,
		addTodo,
		toggleTodo,
	};

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
