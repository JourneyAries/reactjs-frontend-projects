import { IoIosShareAlt } from 'react-icons/io';
import ToolTips from './components/ToolTips';
import { useState, useRef } from 'react';

function App() {
	const [showToolTips, setShowToolTips] = useState<boolean>(false);
	const [toolTipsPosition, setToolTipsPosition] = useState<{
		top: number;
		left: number;
	}>({
		top: 0,
		left: 0,
	});
	const shareRef = useRef<HTMLDivElement | null>(null);
	const handleToggleToolTips = () => {
		if (!showToolTips && shareRef.current) {
			const rect = shareRef.current.getBoundingClientRect();
			setToolTipsPosition({
				top: rect.top + window.scrollY - 70,
				left: rect.left + window.scrollX + rect.width / 2,
			});
		}
		setShowToolTips((prev) => !prev);
	};

	return (
		<div className='bg-slate-100 w-full h-screen flex justify-center items-center'>
			{showToolTips && <ToolTips position={toolTipsPosition} />}
			<main className='bg-white shadow-sm flex w-[80%] rounded-xl overflow-hidden'>
				<img src='drawers.jpg' className='w-[30%] object-cover' />
				{/* content */}
				<div className='w-[70%] flex flex-col p-8 gap-y-4 justify-between'>
					{/* title */}
					<h1 className='text-2xl text-slate-800'>
						Shift the overall look and feel by adding these wonderful touches to
						furniture in your home
					</h1>
					{/* desc */}
					<p className='italic text-slate-500'>
						Ever been in a room and felt like something was missing? Perhaps it
						felt slightly bare and uninviting. I’ve got some simple tips to help
						you make any room feel complete.
					</p>
					{/* footer */}
					<div className='flex items-center'>
						<div className='flex w-full gap-x-2 items-center'>
							{/* avatar */}
							<img src='avatar.png' className='w-10 h-10 rounded-full' />
							{/* text */}
							<span className='flex flex-col w-full'>
								<h2 className='font-semibold text-slate-800 w-full'>
									Christine Evelyn
								</h2>
								<p className='text-sm text-slate-400 w-full'>28 Jun 2020</p>
							</span>
						</div>
						{/* share */}
						<div className='relative' ref={shareRef}>
							<div
								onClick={handleToggleToolTips}
								className='cursor-pointer bg-violet-100 p-2 rounded-full h-fit'>
								<IoIosShareAlt className='text-violet-600 text-xl' />
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
