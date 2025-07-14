import { type FormEvent } from 'react';
import { AiFillStar } from 'react-icons/ai';

type RatingProps = {
	handleSubmit: (e: FormEvent) => void;
	selectedRating: number | null;
	setSelectedRating: (rating: number) => void;
};

const Rating = ({
	handleSubmit,
	selectedRating,
	setSelectedRating,
}: RatingProps) => {
	const rateNumber: number[] = [1, 2, 3, 4, 5];
	return (
		<>
			{/* icon */}
			<AiFillStar className='text-4xl text-amber-400' />
			{/* text */}
			<h1 className='text-4xl font-semibold text-white'>How did we do?</h1>
			<p className='text-slate-400'>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</p>
			{/* interating */}
			<form
				className='flex flex-col gap-y-5'
				onSubmit={(e) => {
					if (!selectedRating) {
						e.preventDefault();
						return;
					}
					handleSubmit(e);
				}}>
				{/* Options */}
				<div className='flex gap-x-6'>
					{rateNumber.map((option, index) => (
						<label key={index}>
							<input
								type='radio'
								value={option}
								name='rating'
								className='peer hidden'
								checked={selectedRating === option}
								onChange={() => setSelectedRating(option)}
							/>
							<div className='appearance-none w-[56px] h-[56px] rounded-full flex items-center justify-center bg-slate-700 text-slate-400 font-bold peer-checked:bg-amber-400 peer-checked:text-amber-950 hover:bg-slate-400 hover:text-slate-800 cursor-pointer'>
								{option}
							</div>
						</label>
					))}
				</div>
				<button
					type='submit'
					disabled={!selectedRating}
					className={`h-[60px] w-full flex py-4 px-3 justify-center items-center rounded-full font-bold ${
						!selectedRating
							? 'bg-slate-700 text-slate-500'
							: 'bg-amber-400 text-amber-950 hover:bg-amber-300 cursor-pointer'
					}`}>
					SUBMIT
				</button>
			</form>
		</>
	);
};

export default Rating;
