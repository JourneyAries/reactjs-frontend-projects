import { FaToggleOff, FaToggleOn } from 'react-icons/fa6';
import type { CardToggleProps } from './types';

export const CardToggle = ({ isActive, handleToggle }: CardToggleProps) => {
	return (
		<div onClick={handleToggle} className='cursor-pointer w-9 h-9'>
			{isActive ? (
				<FaToggleOn className='w-full h-full text-yellow-300' />
			) : (
				<FaToggleOff className='w-full h-full text-slate-500' />
			)}
		</div>
	);
};
