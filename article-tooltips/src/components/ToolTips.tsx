import {
	AiFillInstagram,
	AiFillLinkedin,
	AiFillTwitterCircle,
} from 'react-icons/ai';
import triangle from '../assets/triangle.svg';

type TToolTipsProps = {
	position: {
		top: number;
		left: number;
	};
};

const ToolTips = ({ position }: TToolTipsProps) => {
	return (
		<div
			className='absolute z-50 shadow-2xl'
			style={{
				top: `${position.top}px`,
				left: `${position.left}px`,
				transform: `translate(-50%)`,
			}}>
			<div className='bg-violet-700 items-center flex gap-x-8 py-4 px-8 rounded-2xl'>
				<p className='font-bold text-violet-300'>SHARE</p>
				<span className='flex gap-x-2 text-white text-[28px] [&>*]:cursor-pointer'>
					<AiFillLinkedin />
					<AiFillTwitterCircle />
					<AiFillInstagram />
				</span>
			</div>
			<img
				className='absolute left-1/2 transform -translate-x-1/2 top-14'
				src={triangle}
			/>
		</div>
	);
};

export default ToolTips;
