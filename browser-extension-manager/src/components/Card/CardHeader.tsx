import type { CardHeaderProps } from './types';

export const CardHeader = ({ logo, name, description }: CardHeaderProps) => {
	return (
		<div className='flex gap-x-4'>
			<img className='w-[64px] h-[64px] rounded-xl' src={logo} />
			<div className='flex flex-col gap-y-2'>
				<h2 className='text-2xl text-white font-bold'>{name}</h2>
				<p className='italic text-slate-300 text-lg'>{description}</p>
			</div>
		</div>
	);
};
