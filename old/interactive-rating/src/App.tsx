import { useState, type FormEvent } from 'react';
import Rating from './components/Rating';
import ThankYou from './components/ThankYou';

function App() {
	const [submited, setSubmited] = useState<boolean>(false);
	const [selectedRating, setSelectedRating] = useState<number | null>(null);
	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		setSubmited(true);
	};
	return (
		<div className='h-screen flex items-center justify-center bg-slate-900'>
			<main
				className={`${
					submited && 'items-center'
				} flex flex-col max-w-[424px] h-fit rounded-2xl py-8 px-6 gap-y-5 bg-slate-800`}>
				{submited ? (
					<ThankYou selectedRating={selectedRating} />
				) : (
					<Rating
						handleSubmit={handleSubmit}
						selectedRating={selectedRating}
						setSelectedRating={setSelectedRating}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
