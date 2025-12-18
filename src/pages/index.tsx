import { Header } from '@/components/mainView/Header'
import { List } from '@/components/mainView/List';
import { CreateBtn } from '@/components/mainView/CreateBtn';

export default function Home() {
  return (
    <div>
      <Header />
      <List />
      <CreateBtn />
    </div>
  );
}
