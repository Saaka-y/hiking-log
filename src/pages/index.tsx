import { useState } from 'react';
import { useLogStore } from '@/stores/logStore';
import { Header } from '@/components/mainView/Header'
import { List } from '@/components/mainView/List';
import { CreateBtn } from '@/components/mainView/CreateBtn';
import { CommonModal } from '@/components/CommonModal';
import { Form } from '@/components/formModal/Form'
import { LogModal } from '@/components/logModal/LogModal';
import { filterLogs } from "@/utils/filterLogs"

export default function Home() {
  const [formIsOpen, setFormIsOpen] = useState(false)
  const [logIsOpen, setLogIsOpen] = useState(false)
  const [keyword, setKeyword] = useState("");

  const { storedLogs, clearSelectedLog } = useLogStore();
  const filteredLogs = filterLogs(storedLogs, keyword)

  

  return (
    <div className='w-screen h-dvh flex flex-col justify-center items-center'>
      <div className='w-[90%] max-w-187 h-[60%] flex flex-col justify-around items-center gap-5'>
        <Header keyword={keyword} setKeyword={setKeyword} />
        <List onOpen={() => setLogIsOpen(true)} filteredLogs={filteredLogs} />
        <CreateBtn onOpen={() => setFormIsOpen(true)} />
      </div>

      <CommonModal
        isOpen={formIsOpen}
        onClose={() => setFormIsOpen(false)}
        overlayClick={false}
      >
        <Form onCancel={() => setFormIsOpen(false)} />
      </CommonModal>

      <CommonModal
        isOpen={logIsOpen}
        onClose={() => {
          setLogIsOpen(false)
          clearSelectedLog()
        }}
      >
        <LogModal onClose={() => setLogIsOpen(false)} />
      </CommonModal>
    </div>
  );
}
