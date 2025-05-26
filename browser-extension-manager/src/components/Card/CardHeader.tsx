import avatar from '../../assets/avatar.png';

export const CardHeader = () => {
	return (
		<div className='flex gap-x-4'>
			<img className='w-[64px] h-[64px] rounded-xl' src={avatar} />
			<div className='flex flex-col gap-y-2'>
				<h2 className='text-2xl text-white font-bold'>SpeedBoost</h2>
				<p className='italic text-slate-300 text-lg'>
					Optimizes browser resource usage to accelerate page loading
				</p>
			</div>
		</div>
	);
};
