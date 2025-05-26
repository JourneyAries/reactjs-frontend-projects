import { useState, type ChangeEvent } from 'react';
import { BiBookmarkAlt, BiInfoSquare } from 'react-icons/bi';
import clsx from 'clsx';

export const InputText = () => {
	const [text, setText] = useState<string>('');
	const [errMessage, setErrMessage] = useState<string>('');
	const [isTouched, setIsTouched] = useState<boolean>(false);

	const validateInputText = (value: string) => {
		if (value.length <= 5) {
			setErrMessage('Teks harus lebih dari 5');
		} else {
			setErrMessage('');
		}
	};

	const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setIsTouched(true);
		validateInputText(value);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setText(value);
		if (isTouched) validateInputText(value);
		setErrMessage('');
	};

	const isError = !!errMessage;

	return (
		<div className='flex flex-col gap-y-1'>
			<div className='relative w-full'>
				<BiBookmarkAlt
					className={clsx(
						'absolute left-2 top-1/2 transform -translate-y-1/2',
						isError ? 'text-red-600' : 'text-slate-600',
					)}
				/>
				<input
					type='text'
					placeholder='Masukan teks (min 6 huruf)'
					value={text}
					onChange={handleChange}
					onBlur={handleBlur}
					className={clsx(
						'relative w-full rounded-sm py-1 pl-8 pr-2 outline font-medium',
						isError ? 'outline-red-600' : 'outline-slate-300',
					)}
				/>
			</div>
			{isError && (
				<div className='flex gap-x-1 text-red-400 opacity-50'>
					<BiInfoSquare />
					<p className='text-xs text-red-600'>{errMessage}</p>
				</div>
			)}
		</div>
	);
};
