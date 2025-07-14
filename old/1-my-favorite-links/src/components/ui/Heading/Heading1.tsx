import type { Heading1Props } from './types';

export const Heading1 = ({ text }: Heading1Props) => {
	return <h1 className='w-full text-3xl font-bold text-slate-700'>{text}</h1>;
};
