import type React from 'react';
import iconError from '../assets/icon-error.svg';
import {
	useState,
	type ChangeEventHandler,
	type FocusEventHandler,
} from 'react';

export const InputPassword: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>('');
	const [isError, setIsError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>('');

	const validatePassword = (password: string): boolean => {
		return password.length >= 8;
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = e.target.value;
		const filteredValue = value.replace(/\s/g, '');

		if (isError && filteredValue) {
			setIsError(false);
		}
		setInputValue(filteredValue);
	};

	const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
		const value = e.target.value;

		if (!value) {
			setIsError(true);
			setErrorMessage('Password cannot be empty');
		} else if (!validatePassword(value)) {
			setIsError(true);
			setErrorMessage('Password must be at least 8 characters');
		} else {
			setIsError(false);
			setErrorMessage('');
		}
	};

	return (
		<label className='flex flex-col gap-y-1 w-full'>
			<input
				className={`rounded-lg py-4 px-6 bg-white border border-slate-500 focus:ring-2 ${
					isError
						? 'border-red-400 focus:ring-red-400 focus:text-red-400'
						: 'border-slate-500 focus:ring-violet-700 focus:outline-transparent'
				} `}
				type='password'
				value={inputValue}
				onChange={handleChange}
				placeholder='Your Password'
				onBlur={handleBlur}
			/>
			{isError && (
				<div className='flex items-center gap-x-1 text-red-400 text-sm italic'>
					<img className='w-4 h-4' src={iconError} />
					<p>{errorMessage}</p>
				</div>
			)}
		</label>
	);
};
