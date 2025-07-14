import { TabBar } from './components/TabBar/TabBar';
import dataCard from './data/data.json';
import { getImage } from './utils/getImage';
import { CardList } from './components/Card/CardList';
import { useFilteredCards } from './hooks/useFilteredCards';

function App() {
	const cards = dataCard.map((item) => ({
		...item,
		logo: getImage(item.logo),
		onToggle: () => {},
	}));

	const { filteredCards, activeButton, setActiveButton, toggleCardStatus } =
		useFilteredCards(cards);

	return (
		<main className='flex flex-col bg-slate-800 py-[100px] [&>*]:select-none items-center'>
			<div className='max-w-[1024px] w-full flex flex-col gap-y-11'>
				<TabBar activeButton={activeButton} setActiveButton={setActiveButton} />
				<CardList cards={filteredCards} toggleCardStatus={toggleCardStatus} />
			</div>
		</main>
	);
}

export default App;
