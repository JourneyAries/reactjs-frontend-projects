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
	onToggle: () => void;
};

export type RawCardData = {
	logo: string;
	name: string;
	description: string;
	isActive: boolean;
};

export type CardProps = {
	logo: string;
	name: string;
	description: string;
	isActive: boolean;
	onToggle: () => void;
};

export type CardHeaderProps = {
	logo: string;
	name: string;
	description: string;
};

export type CardFooterProps = {
	isActive: boolean;
	onToggle: () => void;
};

export type CardListProps = {
	cards: CardProps[];
	toggleCardStatus: (index: number) => void;
};
