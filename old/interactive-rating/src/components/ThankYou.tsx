type ThankYouProps = {
	selectedRating: number | null;
};

const ThankYou = ({ selectedRating }: ThankYouProps) => {
	return (
		<>
			{/* img */}
			<img src='illustration-thank-you.png' className='w-[160px] h-[106px]' />
			{/* badge */}
			<p className='w-fit rounded-full py-1 px-5 bg-slate-700 text-amber-400'>
				You selected {selectedRating} out of 5
			</p>
			{/* text */}
			<div className='flex flex-col gap-y-3'>
				<h1 className='text-4xl font-semibold text-center w-full text-white'>
					Thank you!
				</h1>
				<p className='w-full text-center text-slate-400'>
					We appreciate you taking the time to give a rating. If you ever need
					more support, don’t hesitate to get in touch!
				</p>
			</div>
		</>
	);
};

export default ThankYou;
