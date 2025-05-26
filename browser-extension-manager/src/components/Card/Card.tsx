import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

export const Card = () => {
	return (
		<div className='flex flex-col gap-y-5 p-6 bg-slate-700 rounded-lg'>
			<CardHeader />
			<CardFooter />
		</div>
	);
};
