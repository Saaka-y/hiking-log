//@/components/mainView/Item.tsx
import { Log } from "@/types/log";
import { useLogStore } from "@/stores/logStore";

type Props = {
  log: Log;
  onOpen: () => void;
};

export function Item({ log, onOpen }: Props) {
  const { selectLog } = useLogStore();

  const handleOpen = () => {
    onOpen(); // open modal
    selectLog(log.id); // set selectedLogId to store
    console.log("log.id",log.id);
  }

  return (
    <li key={log.id} onClick={handleOpen} className="bg-(--background) w-[90%] h-15 px-6 py-3 text-xs text-(--color)">
      {/* UI for each log */}
      {log.date.toISOString().slice(0, 10)}
      <br />
      {log.mountain.charAt(0).toUpperCase() + log.mountain.slice(1)}
    </li>
  )
}