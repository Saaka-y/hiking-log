//@/components/logModal/LogModal.tsx
import { Log } from '@/types/log';
import { useLogStore } from '@/stores/logStore'
import { storedLogToLog } from '@/utils/logConverter';
import { ReactNode } from 'react';

type Props = {
  onCancel: () => void;
}

export function LogModal({ onCancel }: Props) {
  const { storedLogs, selectedLogId } = useLogStore();
  const logs: Log[] = storedLogs.map(storedLogToLog) // Domain Log
  const log = logs.find(logs => logs.id === selectedLogId)

  if(!log) return null; // Avoid undefined error

  const showTime = (t: Date) => {
    const hour = t.getHours();
    const min = t.getMinutes();
    const time = `${hour < 10 ? "0" : ""}${hour}:${min < 10 ? "0" : ""}${min}`;
    return time;
  }

  type listItems = { label: string, info: ReactNode } // Still working on if it should be changed to ReactNode type
  const listItems: listItems[] = [
    { label: "date", info: log.date.toISOString().slice(0, 10) },
    { label: "mountain", info: log.mountain },
    { label: "weather", info: log.weather },
    { label: "start", info: showTime(log.start) },
    { label: "goal", info: showTime(log.goal) },
    { label: "breakMin", info: log.breakMin },
    { label: "entry", info: log.entry },
    { label: "exit", info: log.exit },
  ]

  const handleDelete = () => {
    
  }

  const handleEdit = () => {

  }

  return (
    <div className="p-4 flex flex-col justify-center items-center gap-5 ">
      <ul className="flex flex-col items-start w-full bg-(--inputColor) p-4 ">
        {listItems.map((item, i) => (
          <li key={i} className="flex justify-center my-1 text-xs ">
            <p className=" w-24 md:w-30 ">
              {item.label === "breakMin" ? "Break" : item.label.charAt(0).toUpperCase() + item.label.slice(1)}
            </p>
            <p className="w-24 md:w-30 ">{item.info} {item.label === "breakMin" && "mins"}</p>
          </li>
        ))}
      </ul>
      <div>
        <p>weather</p>
        <p>icon</p>
      </div>
      <div className="flex gap-10 pt-4">
        <button
          type="button"
          onClick={handleDelete}
          className="py-2 px-4 border-none rounded-xl bg-red-800 text-white"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={handleEdit}
          className="py-2 px-4 border-none rounded-xl bg-sky-700 text-white"
        >
          Edit
        </button>
      </div>
    </div>
  )
}