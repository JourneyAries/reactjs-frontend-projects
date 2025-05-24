import react from 'react';

export const Button: react.FC = () => {
	return (
		<button type='submit' className='uppercase w-full py-6 text-center text-white rounded-lg bg-violet-700 font-bold cursor-pointer hover:bg-violet-800'>
			claim your free trial
		</button>
	);
};
