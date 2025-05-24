import backgroundImage from '../assets/bg-intro-desktop.png';
import type { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div
			className='w-full h-screen bg-red-400 flex items-center justify-center'
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			{children}
		</div>
	);
};
