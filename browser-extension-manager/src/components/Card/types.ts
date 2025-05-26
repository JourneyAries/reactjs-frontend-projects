export type DataCardButton = {
	id: 'active' | 'inactive';
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

export type CardProps = {
	logo: string;
	name: string;
	description: string;
};

export type CardHeaderProps = {
	logo: string;
	name: string;
	description: string;
};
