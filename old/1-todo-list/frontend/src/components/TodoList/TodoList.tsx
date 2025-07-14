import { useTodo } from '../../hook/useTodo';
import { EmptyTodos } from './EmptyTodos';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
	const { todos, deleteTodo, toggleTodo } = useTodo();
	return (
		<ul className='flex flex-col gap-y-2'>
			{todos.length > 0 ?
				todos.map((item) => (
					<TodoItem
						key={item._id}
						_id={item._id}
						text={item.text}
						checked={item.checked}
						handleToggle={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				))
			:	<EmptyTodos />}
		</ul>
	);
};
