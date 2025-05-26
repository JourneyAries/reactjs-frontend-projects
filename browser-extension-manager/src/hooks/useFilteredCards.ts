import { useState } from 'react';
import type { CardProps } from '../components/Card/types';

export const useFilteredCards = (initialCards: CardProps[]) => {
	const [activeButton, setActiveButton] = useState<string>('all');
	const [cards, setCards] = useState<CardProps[]>(initialCards);

	const filteredCards = cards.filter((card) => {
		if (activeButton === 'all') return true;
		if (activeButton === 'active') return card.isActive;
		if (activeButton === 'inactive') return !card.isActive;
		return true;
	});

	const toggleCardStatus = (index: number) => {
		setCards((prevCards) =>
			prevCards.map((card, i) =>
				i === index ? { ...card, isActive: !card.isActive } : card,
			),
		);
	};

	return {
		filteredCards,
		activeButton,
		setActiveButton,
		toggleCardStatus,
	};
};
