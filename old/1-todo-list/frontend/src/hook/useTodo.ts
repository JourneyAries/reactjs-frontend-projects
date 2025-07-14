import { useContext } from 'react';
import { TodoContext } from '../context/Todo/TodoContext';

export const useTodo = () => {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error('useTodo must be used within a TodoProvider');
	}
	return context;
};
