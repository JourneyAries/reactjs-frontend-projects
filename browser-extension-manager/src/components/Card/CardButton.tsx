import type { CardButtonProps } from './types';

export const CardButton = ({ label, handleToggle }: CardButtonProps) => {
	return (
		<button
			onClick={handleToggle}
			type='button'
			className='cursor-pointer px-4 py-1 border border-slate-500 text-white rounded-full'>
			{label}
		</button>
	);
};
