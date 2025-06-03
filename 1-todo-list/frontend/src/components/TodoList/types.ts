export type TodoItemProps = {
	id: number;
	text: string;
	checked: boolean;
	handleToggle: (id: number) => void;
};
