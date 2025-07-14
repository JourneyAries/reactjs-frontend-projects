import react from 'react';

export const TermsServices: react.FC = () => {
	return (
		<div className='text-sm w-full text-center'>
			<span className='text-slate-600'>
				By clicking the button, you are agreeing to our
			</span>
			<span className='font-bold text-red-400'> Terms and Services</span>
		</div>
	);
};
