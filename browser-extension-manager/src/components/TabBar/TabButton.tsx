import type { TabButtonProps } from './types';

export const TabButton = ({
	label,
	isActive,
	handleClick,
	id,
}: TabButtonProps) => {
	return (
		<button
			onClick={() => handleClick(id)}
			className={`rounded-full py-2 px-6 cursor-pointer text-xl ${
				isActive
					? 'bg-amber-400 text-amber-950 font-bold'
					: 'bg-slate-600 text-white'
			}`}>
			{label}
		</button>
	);
};
