import iconStar from '../../assets/icon-star.svg';

export const Title = () => {
	return (
		<div className='flex gap-x-5 items-center'>
			<img src={iconStar} className='w-[40px] h-[40px]' />
			<h1 className='text-4xl text-slate-800 font-bold'>FAQs</h1>
		</div>
	);
};
