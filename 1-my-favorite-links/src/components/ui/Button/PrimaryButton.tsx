import clsx from 'clsx';
import { BiPlus } from 'react-icons/bi';
import type { PrimaryButtonProps } from './types';

export const PrimaryButton = ({ isValid }: PrimaryButtonProps) => {
	return (
		<button
			type='submit'
			className={clsx(
				'cursor-pointer flex h-fit rounded-sm py-1 px-2 w-[80px] items-center justify-center',
				isValid
					? 'font-bold bg-violet-600 text-white'
					: 'hover:bg-slate-200 text-slate-600 bg-slate-300',
			)}>
			{isValid && <BiPlus className='text-2xl' />}
			Save
		</button>
	);
};
