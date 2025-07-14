export type TodoContextType = {
	todos: Todo[];
	addTodo: (text: string) => void;
	toggleTodo: (_id: string) => void;
	deleteTodo: (_id: string) => void;
};

export type Todo = {
	_id: string;
	text: string;
	checked: boolean;
};
