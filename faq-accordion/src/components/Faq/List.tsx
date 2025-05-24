import { useState } from 'react';
import { Question } from './Question';
import { faqList } from '../data/data';

export const List = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const toggleItem = (index: number): void => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<div className='w-full flex flex-col gap-y-6'>
			{/* question */}
			{faqList.map((question, index) => {
				const isOpen = openIndex === index;
				return (
					<Question
						key={question.id}
						index={index}
						question={question}
						toggleItem={toggleItem}
						isOpen={isOpen}
						isLast={index === faqList.length - 1}
					/>
				);
			})}
		</div>
	);
};
