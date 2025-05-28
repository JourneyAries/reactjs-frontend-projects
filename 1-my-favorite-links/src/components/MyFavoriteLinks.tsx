import type { FavLinkProps, FormValues } from './types';
import { PrimaryButton } from './ui/Button/PrimaryButton';
import { Heading1 } from './ui/Heading/Heading1';
import { InputLink } from './ui/Input/InputLink';
import { InputText } from './ui/Input/InputText';
import { useForm } from 'react-hook-form';
import data from '../data/data.json';
import { FavLink } from './FavLink';
import { useState } from 'react';
import { v4 as generateId } from 'uuid';
import { EmptyFavLink } from './EmptyFavLink';

export const MyFavoriteLinks = () => {
	const {
		handleSubmit,
		formState: { isValid },
		control,
		reset,
	} = useForm<FormValues>({ mode: 'onChange' });

	const [favorites, setFavorites] = useState<FavLinkProps[]>(data);

	const onSubmit = (data: FormValues) => {
		const newItem = {
			id: generateId(),
			title: data.title,
			link: data.link,
		};

		setFavorites((prev) => [...prev, newItem]);
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

			<ul className='[&>li]:even:bg-slate-200'>
				{favorites.length === 0 ? (
					<EmptyFavLink />
				) : (
					favorites.map((item) => (
						<FavLink
							key={item.id}
							title={item.title}
							link={item.link}
							id={item.id}
						/>
					))
				)}
			</ul>
		</div>
	);
};
