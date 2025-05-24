import react from 'react';
export const PromotionBar: react.FC = () => {
	return (
		<div className='shadow-new rounded-2xl w-full py-6 bg-slate-700 text-white text-xl text-center'>
			<span className='font-bold'>Try it free 7 days </span>
			<span className='opacity-80'>then $20/mo, thereafter</span>
		</div>
	);
};
