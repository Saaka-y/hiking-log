import Modal from 'react-modal'
import { useState } from 'react';
import { Header } from '@/components/mainView/Header'
import { List } from '@/components/mainView/List';
import { CreateBtn } from '@/components/mainView/CreateBtn';
import { Form } from '@/components/formModal/Form'
import { LogModal } from '@/components/logModal/LogModal';

export default function Home() {
  const [formIsOpen, setFormIsOpen] = useState(false)
  const [logIsOpen, setLogIsOpen] = useState(false)

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='w-[90%] max-w-187 h-[60%] flex flex-col justify-around items-center gap-5'>
        <Header />
        <List setLogIsOpen={setLogIsOpen} />
        <CreateBtn setFormIsOpen={setFormIsOpen}/>
      </div>

      <Modal 
        isOpen={formIsOpen}
        onRequestClose={() => setFormIsOpen(false)} 
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center "
        className="bg-(--foreground) w-96 max-w-[80%] max-h-[90%] p-6 rounded-lg overflow-y-auto overflow-x-hidden"

      >
        <Form />
      </Modal>

      <Modal isOpen={logIsOpen}>
        <LogModal />
      </Modal>
    </div>
  );
}
