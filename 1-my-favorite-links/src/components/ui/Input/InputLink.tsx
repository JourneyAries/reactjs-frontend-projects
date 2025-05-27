import { useEffect, useState, type ChangeEvent } from 'react';
import { BiBookmarkAlt, BiInfoSquare } from 'react-icons/bi';
import clsx from 'clsx';

export const InputLink = () => {
	const [text, setText] = useState<string>('');
	const [errMessage, setErrMessage] = useState<string>('');
	const [isTouched, setIsTouched] = useState<boolean>(false);

	useEffect(() => {
		if (errMessage) {
			setTimeout(() => {
				setErrMessage('');
			}, 2000);
		}
	}, [errMessage]);

	const validateInputText = (value: string) => {
		if (!value) return 'URL cannot be empty';
		const re = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/i;
		if (!re.test(value)) return 'Please enter valid URL';
		return '';
	};

	const updateValidation = (value: string) => {
		const errorMessage = validateInputText(value);
		setErrMessage(errorMessage);
	};

	const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setIsTouched(true);
		updateValidation(value);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setText(value);
		if (isTouched) updateValidation(value);
	};

	const isError = !!errMessage && isTouched;

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
					placeholder='URL'
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
