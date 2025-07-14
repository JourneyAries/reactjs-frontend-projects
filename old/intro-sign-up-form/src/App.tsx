import { Form } from './components/Form';
import { PromotionBar } from './components/PromotionBar';
import { MainLayout } from './layout/MainLayout';

function App() {
	return (
		<MainLayout>
			<div className='flex flex-col gap-y-12 w-fit'>
				<PromotionBar />
				<Form />
			</div>
		</MainLayout>
	);
}

export default App;
