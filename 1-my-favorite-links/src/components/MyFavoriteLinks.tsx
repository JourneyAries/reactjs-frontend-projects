import { PrimaryButton } from './ui/Button/PrimaryButton';
import { Heading1 } from './ui/Heading/Heading1';
import { InputLink } from './ui/Input/InputLink';
import { InputText } from './ui/Input/InputText';

export const MyFavoriteLinks = () => {
	const [isValid, setIsValid] = useState<boolean>(false);
	return (
		<div className='w-[640px] flex flex-col gap-y-5 p-8 bg-white rounded-lg shadow-lg'>
			<Heading1 text={'My Favorite Links'} />
			<form onSubmit={() => {}}>
				<InputText />
				<InputLink />
				<PrimaryButton isValid={isValid} />
			</form>
		</div>
	);
};
