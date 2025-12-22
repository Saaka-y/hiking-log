//@/components/mainView/List.tsx

import { Dispatch, SetStateAction } from 'react';
import { Log } from '@/types/log';
import { Item } from "@/components/mainView/Item"


type Props = {
  setLogIsOpen: Dispatch<SetStateAction<boolean>>;
  filteredLogs: Log[];
};

export function List({ setLogIsOpen, filteredLogs }: Props) {

  return (
    <ul className="bg-(--foreground) w-[80%] h-full my-3">
      {filteredLogs.map(log => (
        <Item 
          key={log.id}
          log={log}  
          setLogIsOpen={setLogIsOpen}
        />
      ))}
    </ul>
  )
}
