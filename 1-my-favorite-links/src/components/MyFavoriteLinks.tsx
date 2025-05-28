import type { FormValues } from './types';
import { PrimaryButton } from './ui/Button/PrimaryButton';
import { Heading1 } from './ui/Heading/Heading1';
import { InputLink } from './ui/Input/InputLink';
import { InputText } from './ui/Input/InputText';
import { useForm } from 'react-hook-form';

export const MyFavoriteLinks = () => {
	const {
		handleSubmit,
		formState: { isValid },
		control,
		reset,
	} = useForm<FormValues>({ mode: 'onChange' });

	const onSubmit = (data: FormValues) => {
		console.log(data);
		reset();
	};
	return (
		<div className='w-[640px] flex flex-col gap-y-5 p-8 bg-white rounded-lg shadow-lg'>
			<Heading1 text={'My Favorite Links'} />
			<form onSubmit={handleSubmit(onSubmit)} className='flex gap-x-3'>
				<InputText name='title' control={control} />
				<InputLink name='link' control={control} />
				<PrimaryButton isValid={isValid} />
			</form>
		</div>
	);
};
