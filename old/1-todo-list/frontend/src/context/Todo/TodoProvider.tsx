import { useEffect, useState } from 'react';
import type { ChildrenWithProps } from '../../types';
import type { Todo } from '../types';
import { TodoContext } from './TodoContext';
import {
	deleteTodoApi,
	getTodosApi,
	patchTodoApi,
	postTodoApi,
} from '../../api/api';

export const TodoProvider = ({ children }: ChildrenWithProps) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	// useEffect(() => {
	// 	getTodos().then((data) => setTodos(data));
	// }, []);
	useEffect(() => {
		getTodosApi().then((data) => {
			// normalize semua todos agar punya _id dan properti sesuai
			const normalized = data.map((todo: Todo) => ({
				_id: todo._id || todo._id || Math.random().toString(),
				text: todo.text,
				checked: todo.checked,
			}));
			setTodos(normalized);
		});
	}, []);

	const addTodo = async (text: string) => {
		try {
			const newTodo = await postTodoApi(text);
			// normalize newTodo agar selalu punya _id
			const normalizedTodo = {
				_id: newTodo._id || newTodo._id || Math.random().toString(),
				text: newTodo.text,
				checked: newTodo.checked,
			};
			setTodos((prev) => [...prev, normalizedTodo]);
		} catch (error) {
			console.error('Failed to add todo', error);
		}
	};

	const deleteTodo = async (_id: string) => {
		try {
			await deleteTodoApi(_id);
			setTodos((prev) => prev.filter((todo) => todo._id !== _id));
		} catch (error) {
			console.error('Failed to delete todo', error);
		}
	};

	const toggleTodo = async (_id: string) => {
		try {
			const targetTodo = todos.find((item) => item._id === _id);
			if (!targetTodo) {
				console.warn(`Todo with id ${_id} not found`);
				return;
			}

			const updateTodo = await patchTodoApi(_id, {
				checked: !targetTodo.checked,
			});

			setTodos((prev) =>
				prev.map((item) => (item._id === _id ? updateTodo : item)),
			);
		} catch (error) {
			console.error('Failed to toggle todo', error);
		}
	};

	const value = {
		todos,
		addTodo,
		deleteTodo,
		toggleTodo,
	};

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
