import { BiInfoSquare, BiLinkAlt } from 'react-icons/bi';
import clsx from 'clsx';
import type { InputLinkProps } from './types';
import { useControlledInputLink } from './hooks/useControlledInputLink';
import type { FormValues } from '../../types';

export const InputLink = <T extends FormValues>({
	name,
	control,
}: InputLinkProps<T>) => {
	const { field, error, showError, handleBlur, handleChange } =
		useControlledInputLink({ control, name });
	return (
		<div className='flex flex-col gap-y-1'>
			<div className='relative w-full'>
				<BiLinkAlt
					className={clsx(
						'absolute left-2 top-1/2 transform -translate-y-1/2',
						showError ? 'text-red-600' : 'text-slate-600',
					)}
				/>
				<input
					{...field}
					type='text'
					placeholder='URL here'
					value={field.value ?? ''}
					onChange={handleChange}
					onBlur={handleBlur}
					className={clsx(
						'relative w-full rounded-sm py-1 pl-8 pr-2 outline font-medium',
						showError ? 'outline-red-600' : 'outline-slate-300',
					)}
				/>
			</div>
			{showError && (
				<div className='flex gap-x-1 text-red-400 opacity-50'>
					<BiInfoSquare />
					<p className='text-xs text-red-600'>{error?.message}</p>
				</div>
			)}
		</div>
	);
};
