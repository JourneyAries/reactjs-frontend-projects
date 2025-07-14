import iconMinus from '../../assets/icon-minus.svg';
import iconPlus from '../../assets/icon-plus.svg';
import { type QuestionProps } from './types';

export const Question = ({
	index,
	question,
	toggleItem,
	isOpen,
	isLast,
}: QuestionProps) => {
	return (
		<>
			<div
				onClick={(e) => {
					e.preventDefault();
					toggleItem(index);
				}}
				className='flex flex-col gap-y-4 cursor-pointer'>
				{/* title */}
				<div className='w-full flex gap-x-8 justify-between'>
					<h2 className='text-lg text-slate-800 font-bold'>
						{question.question}
					</h2>
					{isOpen ? (
						<img className='w-[30px] h-[30px]' src={iconMinus} />
					) : (
						<img className='w-[30px] h-[30px]' src={iconPlus} />
					)}
				</div>
				{isOpen && <p className='text-slate-600'>{question.answer}</p>}
			</div>
			{isLast || <hr className='w-full text-slate-200' />}
		</>
	);
};
