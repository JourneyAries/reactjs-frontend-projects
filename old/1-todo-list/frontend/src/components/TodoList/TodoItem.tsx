import clsx from 'clsx';
import { BiSolidCheckbox, BiSolidCheckboxChecked } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import type { TodoItemProps } from './types';

export const TodoItem = ({
	_id,
	text,
	checked,
	handleToggle,
	deleteTodo,
}: TodoItemProps) => {
	return (
		<li
			onClick={() => handleToggle(_id)}
			className={clsx(
				'list-none flex gap-x-2 items-center rounded border p-2 cursor-pointer',
				checked ?
					'border-transparent bg-slate-100 text-slate-600 line-through'
				:	'border-violet-300 bg-violet-100 text-violet-950',
			)}>
			{checked ?
				<BiSolidCheckboxChecked className='text-2xl text-slate-400' />
			:	<BiSolidCheckbox className='text-2xl text-violet-700' />}
			<p className={clsx('w-full')}>{text}</p>
			<CgClose
				onClick={(e) => {
					e.stopPropagation();
					deleteTodo(_id);
				}}
				className='text-2xl text-slate-400'
			/>
		</li>
	);
};
