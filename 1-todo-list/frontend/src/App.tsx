import { AddTodo } from './components/AddTodo/AddTodo';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList/TodoList';
import { MainProvider } from './context';

export function App() {
	return (
		<MainProvider>
			<div className='flex h-screen items-center justify-center bg-violet-200 [&>*]:select-none'>
				<main className='flex flex-col w-[640px] rounded bg-white p-8 shadow-md gap-y-5'>
					<Title />
					<AddTodo />
					<TodoList />
				</main>
			</div>
		</MainProvider>
	);
}
