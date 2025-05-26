export type DataCardButton = {
	id: string;
	label: string;
};

export type CardButtonProps = {
	label: string;
	handleToggle: () => void;
};

export type CardToggleProps = {
	isActive: boolean;
	handleToggle: () => void;
};
