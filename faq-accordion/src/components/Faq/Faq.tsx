import { Title } from './Title';
import { List } from './List';

const Faq = () => {
	return (
		<div className='flex flex-col gap-y-12 bg-white shadow-xl rounded-2xl py-12 px-8 w-[600px]'>
			<Title />
			<List />
		</div>
	);
};

export default Faq;
