import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';
import type { CardProps } from './types';

export const Card = ({
	logo,
	name,
	description,
	isActive,
	onToggle,
}: CardProps) => {
	return (
		<div className='flex flex-col gap-y-5 p-6 bg-slate-700 rounded-lg'>
			<CardHeader logo={logo} name={name} description={description} />
			<CardFooter isActive={isActive} onToggle={onToggle} />
		</div>
	);
};
