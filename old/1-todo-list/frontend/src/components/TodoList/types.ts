export type TodoItemProps = {
	_id: string;
	text: string;
	checked: boolean;
	handleToggle: (_id: string) => void;
	deleteTodo: (_id: string) => void;
};
