import { Header } from './Header';
import { Menu } from './Menu';

export const Profile = () => {
  return (
    <main className="flex m-auto flex-col h-fit bg-white max-w-[350px] rounded-lg py-8 px-6 gap-y-5 shadow-lg">
      <Header />
      <Menu />
    </main>
  );
};
