import { BiTrashAlt } from 'react-icons/bi';
import type { FavLinkProps } from './types';

export const FavLink = ({ title, link }: FavLinkProps) => {
	return (
		<li className='flex'>
			<div className='w-full py-2 px-4'>
				<h3 className='font-bold'>{title}</h3>
				<p className='italic text-slate-500 text-sm'>{link}</p>
			</div>
			<button className='w-[82px] border-l border-slate-300 cursor-pointer flex flex-col justify-center items-center text-slate-600 group hover:bg-red-500 hover:text-white hover:font-bold hover:border-transparent'>
				<p className='w-full'>Delete</p>
				<BiTrashAlt className='hidden group-hover:block opacity-50' />
			</button>
		</li>
	);
};
