import { TabButton } from './TabButton';
import { dataTabBar } from './constants';
import type { TabBarProps } from './types';

export const TabBar = ({ activeButton, setActiveButton }: TabBarProps) => {
	const handleClick = (id: string) => {
		setActiveButton(id);
	};

	return (
		<div className='flex justify-between'>
			<h1 className='text-3xl text-white font-bold'>Extension List</h1>
			<div className='flex gap-x-3'>
				{dataTabBar.map((button) => (
					<TabButton
						key={button.id}
						label={button.label}
						isActive={activeButton === button.id}
						id={button.id}
						handleClick={handleClick}
					/>
				))}
			</div>
		</div>
	);
};
