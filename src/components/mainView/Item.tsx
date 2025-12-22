//@/components/mainView/Item.tsx
import { Log } from "@/types/log";

type Props = {
  log: Log;
  onOpen: () => void;
};

export function Item({log, onOpen }: Props) {


  return (
    <li onClick={onOpen} className="bg-(--background) w-[90%] h-full px-6 py-3 text-xs">
      {/* UI for each log */}
      {log.date.toISOString().slice(0,10)}
      <br/>
      {log.mountain.charAt(0).toUpperCase() + log.mountain.slice(1)}
    </li>
  )
}