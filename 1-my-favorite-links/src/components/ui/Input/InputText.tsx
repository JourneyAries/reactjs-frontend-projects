import { BiBookmarkAlt, BiInfoSquare } from 'react-icons/bi';
import clsx from 'clsx';
import { type FieldValues } from 'react-hook-form';
import type { InputTextProps } from './types';
import { useControlledInputText } from './hooks/useControlledInputText';

export const InputText = <T extends FieldValues>({
	name,
	control,
}: InputTextProps<T>) => {
	const { field, error, showError, handleBlur, handleChange } =
		useControlledInputText({ control, name });
	return (
		<div className='flex flex-col gap-y-1'>
			<div className='relative w-full'>
				<BiBookmarkAlt
					className={clsx(
						'absolute left-2 top-1/2 transform -translate-y-1/2',
						showError ? 'text-red-600' : 'text-slate-600',
					)}
				/>
				<input
					{...field}
					type='text'
					placeholder='Enter the Title'
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
