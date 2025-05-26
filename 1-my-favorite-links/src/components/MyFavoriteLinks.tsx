import { Heading1 } from './ui/Heading/Heading1';
import { InputText } from './ui/Input/InputText';

export const MyFavoriteLinks = () => {
	return (
		<div className='w-[640px] flex flex-col gap-y-5 p-8 bg-white rounded-lg shadow-lg'>
			<Heading1 text={'My Favorite Links'} />
			<InputText />
		</div>
	);
};
