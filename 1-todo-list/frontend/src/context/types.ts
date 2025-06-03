export type TodoContextType = {
	todos: Todo[];
	addTodo: (text: string) => void;
	toggleTodo: (id: number) => void;
};

export type Todo = {
	id: number;
	text: string;
	checked: boolean;
};
