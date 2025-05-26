import { TabBar } from './components/TabBar/TabBar';
import { Card } from './components/Card/Card';

function App() {
	return (
		<main className='flex flex-col bg-slate-800 py-[100px] [&>*]:select-none items-center'>
			<div className='max-w-[1024px] w-full flex flex-col gap-y-11'>
				<TabBar />
				<div className='grid grid-cols-2 gap-4'>
					<Card />
					<Card />
				</div>
			</div>
		</main>
	);
}

export default App;
