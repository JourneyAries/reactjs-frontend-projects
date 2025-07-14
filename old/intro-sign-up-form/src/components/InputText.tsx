import type React from 'react';
import iconError from '../assets/icon-error.svg';
import {
	useState,
	type ChangeEventHandler,
	type FocusEventHandler,
} from 'react';

type InputTextProps = {
	text: string;
};

export const InputText: React.FC<InputTextProps> = ({ text }) => {
	const [inputValue, setInputValue] = useState<string>('');
	const [isError, setIsError] = useState<boolean>(false);
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = e.target.value;
		const spaceIndex = value.indexOf(' ');
		const filteredValue =
			spaceIndex >= 0 ? value.substring(0, spaceIndex) : value;

		if (isError && e.target.value.trim()) {
			setIsError(false);
		}

		setInputValue(filteredValue);
	};

	const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
		if (!e.target.value.trim()) {
			setIsError(true);
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
				type='text'
				value={inputValue}
				onChange={handleChange}
				placeholder={text}
				onBlur={handleBlur}
			/>
			{isError && (
				<div className='flex items-center gap-x-1 text-red-400 text-sm italic'>
					<img className='w-4 h-4' src={iconError} />
					<p>{text} cannot be empty</p>
				</div>
			)}
		</label>
	);
};
