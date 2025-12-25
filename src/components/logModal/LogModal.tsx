//@/components/logModal/LogModal.tsx
import Modal from 'react-modal'
import { useState } from 'react';
import { WiDaySunny, WiDaySunnyOvercast, WiDayCloudyHigh, WiCloudy, WiDayRainMix, WiRain, WiRainWind, WiThunderstorm, WiSnowflakeCold, WiFog } from "react-icons/wi";
import { Log } from '@/types/log';
import { useLogStore } from '@/stores/logStore'
import { logToStoredLog, storedLogToLog } from '@/utils/logConverter';

type Props = {
  onCancel: () => void;
}

//** To be reviewed */ 
const weatherIcon = {
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
} as const;


type EditableKey = "mountain" | "weather" | "entry" | "exit";

type EditableField = {
  label: string;
  key: EditableKey;
  type: "text";
};

const editableFields: EditableField[] = [
  { label: "Mountain", key: "mountain", type: "text" },
  { label: "Weather", key: "weather", type: "text" },
  { label: "Entry", key: "entry", type: "text" },
  { label: "Exit", key: "exit", type: "text" },
];


export function LogModal({ onCancel }: Props) {
  const [isEditOpen, setIsEditOpen] = useState(false); // For Edit UI
  const [draft, setDraft] = useState<Log | null>(null);
  const { storedLogs, selectedLogId, deleteLog, updateLog } = useLogStore();
  const logs: Log[] = storedLogs.map(storedLogToLog) // Domain Log
  const log = logs.find(logs => logs.id === selectedLogId)

  if (!log) return null; // Avoid undefined error

  //** To be reviewed */ 
  const Icon = weatherIcon[log.weather as keyof typeof weatherIcon];

  const showTime = (t: Date) => {
    const hour = t.getHours();
    const min = t.getMinutes();
    const time = `${hour < 10 ? "0" : ""}${hour}:${min < 10 ? "0" : ""}${min}`;
    return time;
  }

  type listItems = { label: string, info: string | number, isEditable: boolean } // Still working on if it should be changed to ReactNode type
  const listItems: listItems[] = [
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
    onCancel();
  }



  const handleEdit = () => {
    setIsEditOpen(true);
    setDraft(log);
  }

  const handleSave = () => {
    if (!draft) return;
    const ok = window.confirm("Are you sure to change?");
    if (!ok) return;
    const storedLog = logToStoredLog(draft);
    updateLog(storedLog);
    setIsEditOpen(false);
    setDraft(null);
  }



  return (
    <div className="p-4 flex flex-col justify-center items-center ">
      <ul className="flex flex-col items-start w-full bg-(--inputColor) p-4 border-0">
        {listItems.map((item, i) => (
          <li key={i} className="flex justify-center py-1 text-xs md:text-sm ">
            <p className=" w-24 md:w-30 ">
              {item.label === "breakMin" ? "Break" : item.label.charAt(0).toUpperCase() + item.label.slice(1)}
            </p>
            <p className="w-24 md:w-30 ">{item.info} {item.label === "breakMin" && "mins"}</p>
          </li>
        ))}
      </ul>

      {isEditOpen && draft && (
        <Modal
          isOpen={isEditOpen}
          onRequestClose={() => {
            setIsEditOpen(false);
            setDraft(null);
          }}
          overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center "
          className="bg-(--foreground) w-96 max-w-[80%] max-h-[90%] p-6 rounded-lg overflow-y-auto overflow-x-hidden"
        >
          <ul>
            {/* 編集したい行だけ */}

            {editableFields
              .map((item) => (
                <li key={item.label}>
                  <p>{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</p>
                  <input
                    value={draft[item.key]}
                    onChange={(e) => {
                      setDraft({
                        ...draft, [item.key]:
                          e.target.value
                      })
                    }}
                  />
                </li>
              ))}
          </ul>

          <button
            type="button"
            onClick={handleSave}
            className="py-2 px-4 border-none rounded-xl bg-lime-700 text-white"
          >
            Save
          </button>
        </Modal>
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