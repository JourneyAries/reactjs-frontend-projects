export type FaqItem = {
	id: number;
	question: string;
	answer: string;
};

export type QuestionProps = {
	index: number;
	question: FaqItem;
	toggleItem: (index: number) => void;
	isOpen: boolean;
	isLast: boolean;
};
