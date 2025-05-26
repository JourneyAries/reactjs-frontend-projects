import { Card } from './Card';
import type { CardListProps } from './types';

export const CardList = ({ cards, toggleCardStatus }: CardListProps) => {
	return (
		<div className='grid grid-cols-2 gap-4'>
			{cards.map((card, index) => (
				<Card key={index} {...card} onToggle={() => toggleCardStatus(index)} />
			))}
		</div>
	);
};
