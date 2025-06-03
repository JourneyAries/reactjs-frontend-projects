import { useTodo } from '../../hook/useTodo';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
	const { todos, toggleTodo } = useTodo();
	return (
		<ul className='flex flex-col gap-y-2'>
			{todos.map((item) => (
				<TodoItem
					key={item.id}
					id={item.id}
					text={item.text}
					checked={item.checked}
					handleToggle={toggleTodo}
				/>
			))}
		</ul>
	);
};
