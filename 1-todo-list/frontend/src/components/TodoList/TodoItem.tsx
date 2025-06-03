import clsx from 'clsx';
import { BiSolidCheckbox, BiSolidCheckboxChecked } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import type { TodoItemProps } from './types';

export const TodoItem = ({
	id,
	text,
	checked,
	handleToggle,
}: TodoItemProps) => {
	return (
		<li
			onClick={() => handleToggle(id)}
			className={clsx(
				'list-none flex gap-x-2 items-center rounded border p-2 cursor-pointer',
				checked ?
					'border-violet-300 bg-violet-100 text-violet-950'
				:	'border-transparent bg-slate-100 text-slate-600 line-through',
			)}>
			{checked ?
				<BiSolidCheckbox className='text-2xl text-violet-700' />
			:	<BiSolidCheckboxChecked className='text-2xl text-slate-400' />}
			<p className={clsx('w-full')}>{text}</p>
			<CgClose className='text-2xl text-slate-400' />
		</li>
	);
};
