export type DataTabBar = { id: string; label: string };

export type TabButtonProps = {
	label: string;
	isActive: boolean;
	handleClick: (id: string) => void;
	id: string;
};

export type TabBarProps = {
	activeButton: string;
	setActiveButton: (id: string) => void;
};
