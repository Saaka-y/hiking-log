//@/components/logModal/LogModal.tsx
// Refered to https://reactcommunity.org/react-modal/

import { useState } from 'react';
import { WiDaySunny, WiDaySunnyOvercast, WiDayCloudyHigh, WiCloudy, WiDayRainMix, WiRain, WiRainWind, WiThunderstorm, WiSnowflakeCold, WiFog } from "react-icons/wi";
import { Log, Weather } from '@/types/log';
import { useLogStore } from '@/stores/logStore'
import { storedLogToLog } from '@/utils/logConverter';
import { CommonModal } from '../CommonModal';
import { EditModal } from './EditModal';

type Props = {
  onClose: () => void;
}

// Type-safe weather icon mapping using the Weather union type
const weatherIcon: Record<Weather, React.ComponentType<{ size?: number }>> = {
  Clear: WiDaySunny,
  "Partially sunny": WiDaySunnyOvercast,
  "Mostly cloudy": WiDayCloudyHigh,
  Cloudy: WiCloudy,
  "Light rain": WiDayRainMix,
  Rain: WiRain,
  "Heavy rain": WiRainWind,
  Thunderstorm: WiThunderstorm,
  Snow: WiSnowflakeCold,
  "Fog / Mist": WiFog,
};


export function LogModal({ onClose }: Props) {
  const [isEditOpen, setIsEditOpen] = useState(false); // For Edit UI
  const [draft, setDraft] = useState<Log | null>(null); // Editing state
  const { storedLogs, selectedLogId, deleteLog } = useLogStore();
  const logs: Log[] = storedLogs.map(storedLogToLog) // Convert to Domain Log
  const log = logs.find(logs => logs.id === selectedLogId) // Selected Log

  if (!log) return null; // Avoid undefined error

  const Icon = weatherIcon[log.weather];

  // Set Time Ui
  const showTime = (t: Date) => {
    const hour = t.getHours();
    const min = t.getMinutes();
    const time = `${hour < 10 ? "0" : ""}${hour}:${min < 10 ? "0" : ""}${min}`;
    return time;
  }

  // For Log Ui (readonly)
  type ListItem = {
    label: string;
    info: string | number;
    isEditable: boolean;
  }

  const listItems: ListItem[] = [
    { label: "date", info: log.date.toISOString().slice(0, 10), isEditable: false },
    { label: "mountain", info: log.mountain, isEditable: true },
    { label: "weather", info: log.weather, isEditable: true },
    { label: "start", info: showTime(log.start), isEditable: false },
    { label: "goal", info: showTime(log.goal), isEditable: false },
    { label: "breakMin", info: log.breakMin, isEditable: true },
    { label: "entry", info: log.entry, isEditable: true },
    { label: "exit", info: log.exit, isEditable: true },
  ]


  const handleDelete = () => {
    if (!selectedLogId) return;
    const ok = window.confirm("Are you sure to delete?");
    if (!ok) return;
    deleteLog(selectedLogId);
    onClose();
  }

  const handleEdit = () => {
    setIsEditOpen(true);
    setDraft(log);
  }


  return (
    <div className="p-4 flex flex-col justify-center items-center ">
      <ul className="flex flex-col items-start w-full bg-(--inputColor) p-4 border-0">
        {listItems.map((item, i) => (
          <li key={i} className="flex justify-center py-1 text-xs md:text-sm ">
            <p className=" w-24 md:w-30 ">
              {item.label === "breakMin" ? "Break" : item.label.charAt(0).toUpperCase() + item.label.slice(1)}
            </p>
            <p className="w-24 md:w-30 ">{item.label === "mountain" && "Mt. "}{item.info} {item.label === "breakMin" && "mins"}</p>
          </li>
        ))}
      </ul>

      {/*******  Edit modal ********/}
      {isEditOpen && draft && (
        <CommonModal
          isOpen={isEditOpen}
          onClose={() => {
            setIsEditOpen(false);
            setDraft(null);
          }}
          overlayClick={false}
        >
          <EditModal
            log={log}
            onCancel={() => {
              setIsEditOpen(false);
              setDraft(null);
            }}
            setDraft={setDraft}
            draft={draft}
          />
        </CommonModal>
      )}

      {/* weather info */}
      <div className='flex flex-col items-center w-full bg-(--inputColor) mb-4 py-4'>
        <p className='mb-2'>{log.weather}</p>
        {Icon && <Icon size={60} />}
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