import { CardButton } from './CardButton';
import { CardToggle } from './CardToggle';
import type { CardFooterProps } from './types';
import { dataCardButton } from './constants';

export const CardFooter = ({ isActive, onToggle }: CardFooterProps) => {
	const activeButtonData =
		dataCardButton.find(
			(item) => item.id === (isActive ? 'active' : 'inactive'),
		) ?? dataCardButton[0];

	return (
		<div className='flex justify-between'>
			<CardButton label={activeButtonData.label} handleToggle={onToggle} />
			<CardToggle isActive={isActive} onToggle={onToggle} />
		</div>
	);
};
