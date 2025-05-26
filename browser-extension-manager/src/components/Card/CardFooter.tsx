import { useState } from 'react';
import { CardButton } from './CardButton';
import { CardToggle } from './CardToggle';
import type { DataCardButton } from './types';
import { dataCardButton } from './constants';

export const CardFooter = () => {
	const [activeItem, setActiveItem] = useState<DataCardButton>(
		dataCardButton[0],
	);

	const handleToggle = () => {
		const toggleButton =
			dataCardButton.find((item) => item.id !== activeItem.id) ||
			dataCardButton[0];
		setActiveItem(toggleButton);
	};

	return (
		<div className='flex justify-between'>
			<CardButton label={activeItem.label} handleToggle={handleToggle} />
			<CardToggle
				isActive={activeItem.id === 'active'}
				handleToggle={handleToggle}
			/>
		</div>
	);
};
