//@/components/mainView/List.tsx
import { Log } from '@/types/log';
import { Item } from "@/components/mainView/Item"


type Props = {
  onOpen: () => void;
  filteredLogs: Log[];
};

export function List({ onOpen, filteredLogs }: Props) {

  return (
    <ul className="flex flex-col items-center gap-4 bg-(--foreground) w-[80%] h-full py-4 overflow-y-auto">
      {filteredLogs.map(log => (
        <Item 
          key={log.id}
          log={log}  
          onOpen={onOpen}
        />
      ))}
    </ul>
  )
}
