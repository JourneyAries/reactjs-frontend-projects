import type { FavLinkProps, FormValues } from './types';
import { PrimaryButton } from './ui/Button/PrimaryButton';
import { Heading1 } from './ui/Heading/Heading1';
import { InputLink } from './ui/Input/InputLink';
import { InputText } from './ui/Input/InputText';
import { useForm } from 'react-hook-form';
// import data from '../data/data.json';
import { FavLink } from './FavLink';
import { useState, useEffect } from 'react';
// import { v4 as generateId } from 'uuid';
import { EmptyFavLink } from './EmptyFavLink';
import axios from 'axios';

export const MyFavoriteLinks = () => {
	const {
		handleSubmit,
		formState: { isValid },
		control,
		reset,
	} = useForm<FormValues>({ mode: 'onChange' });

	// State untuk menyimpan list favorite links
	const [favorites, setFavorites] = useState<FavLinkProps[]>([]);

	// Ambil URL API backend dari file end
	const API_URL = import.meta.env.VITE_API_URL;

	// useEffect untuk jalankan sekali setelah komponent dimount
	// untuk ambil data dari backend
	useEffect(() => {
		axios
			.get(`${API_URL}/favorites`) //get requst ke backend
			.then((res) => {
				setFavorites(res.data);
			}) // simpan data ke state favorites
			.catch((error) => console.error(error));
	}, [API_URL]);

	// Fungsi saat submit form tambah link baru
	const onSubmit = async (data: FormValues) => {
		try {
			// Kirim POST request ke backend dengan axios.post
			const response = await axios.post(`${API_URL}/favorites`, data, {
				headers: { 'Content-Type': 'application/json' },
			});

			// Ambil data yang baru disimpan dari response backend
			const newItem = response.data;

			// Update state favorites dengan item baru dari server (supaya data bisa sinkron)
			setFavorites((prev) => [...prev, newItem]);
			// reset form
			reset();
		} catch (error) {
			console.error('Error saat tambah favorite', error);
		}
	};

	// Fungsi untuk hapus favorite link berdasarkan id
	// const handleDelete = async (id: string) => {
	// 	try {
	// 		// Kirim request delete ke backend
	// 		await axios.delete(`${API_URL}/favorites/${id}`);
	// 		// Setelah berhasil, update state supaya hapus item dengan id tersebut
	// 		setFavorites((prev) => prev.filter((item) => item._id !== id));
	// 	} catch (error) {
	// 		console.error('Error when deleting favorite', error);
	// 	}
	// };

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
							key={item._id}
							title={item.title}
							link={item.link}
							_id={item._id}
							// handleDelete={handleDelete}
						/>
					))
				)}
			</ul>
		</div>
	);
};
