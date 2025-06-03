import clsx from 'clsx';
import { BiPlus } from 'react-icons/bi';
import type { ButtonAddProps } from './types';

export const ButtonAdd = ({ active }: ButtonAddProps) => {
	return (
		<button
			type='submit'
			className={clsx(
				'flex rounded-sm px-3 justify-center items-center',
				active ?
					'bg-violet-700 hover:bg-violet-500 text-white font-bold cursor-pointer'
				:	'bg-slate-200 text-slate-600 disabled',
			)}>
			<BiPlus className={clsx('text-2xl', active || 'hidden')} />
			<p>Add</p>
		</button>
	);
};
