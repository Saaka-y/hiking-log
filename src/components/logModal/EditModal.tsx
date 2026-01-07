//@/components/LogModal/EditModal.tsx
import { Log } from '@/types/log';
import { useLogStore } from '@/stores/logStore'
import { logToStoredLog } from '@/utils/logConverter';


// For Edit modal
type EditableKey = "mountain" | "entry" | "exit";
type EditableField = {
  label: string;
  key: EditableKey;
  type: "text";
};

const editableFields: EditableField[] = [
  { label: "Mountain", key: "mountain", type: "text" },
  { label: "Entry", key: "entry", type: "text" },
  { label: "Exit", key: "exit", type: "text" },
];

type Props = {
  log: Log;
  onCancel: () => void;
  setDraft: (draft: Log) => void;
  draft: Log | null;
}


export function EditModal({ log, onCancel, setDraft, draft }: Props) {
  const { updateLog } = useLogStore();

  const handleSave = () => {
    if (!draft) return;
    const ok = window.confirm("Are you sure to update?");
    if (!ok) return;
    const storedLog = logToStoredLog(draft);
    updateLog(storedLog);
    onCancel();
  }

  const handleCancel = () => {
    if (draft?.mountain !== log.mountain || draft?.entry !== log.entry || draft?.exit !== log.exit) {
      const ok = window.confirm("Are you sure to cancel?");
      if (!ok) return;
    }

    onCancel();
  }


  if (!draft) return null;

  return (
    <>
      <ul className="flex flex-col items-start w-full bg-(--inputColor) p-4 border-0">

        {editableFields
          .map((item) => (
            <li key={item.label} className="flex justify-center py-1 text-xs md:text-sm ">
              <p className=" w-24 md:w-30 ">{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</p>
              <input
                value={draft[item.key]}
                onChange={(e) => {
                  setDraft({
                    ...draft, [item.key]:
                      e.target.value
                  })
                }}
                className=" w-24 md:w-30 px-2  bg-amber-300 focus:ring-yellow-500 rounded-md focus:outline-none focus:ring-2"
              />
            </li>
          ))}
      </ul>

      <div className="flex justify-center gap-10 pt-4">
        <button
          id="form"
          type="button"
          onClick={handleCancel}
          className="mt-4 py-2 px-4 rounded-xl bg-gray-400 hover:bg-gray-500 text-white"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="mt-4 py-2 px-4 border-none rounded-xl bg-lime-700 text-white"
        >
          Save
        </button>
      </div>
    </>
  )
}