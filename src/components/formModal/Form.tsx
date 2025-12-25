//@/components/formModal/Form.tsx
import { useState } from "react";
import { useLogStore } from "@/stores/logStore";
import { FormLog } from "@/types/log";
import { formLogToLog, logToStoredLog } from "@/utils/logConverter";

type Props = {
  onCancel: () => void;
}

export function Form({ onCancel }: Props) {
  const { addLog } = useLogStore();

  const [formData, setFormData] = useState<FormLog>({
    date: "",
    mountain: "",
    weather: "",
    start: "",
    goal: "",
    breakMin: "",
    entry: "",
    exit: "",
  })

  const resetForm = () => {
    setFormData({
      date: "",
      mountain: "",
      weather: "",
      start: "",
      goal: "",
      breakMin: "",
      entry: "",
      exit: "",
    })
  }

  // formData のキー名（"Date" | "Mountain" | ...）を label として使う型
  // 文字列、などではなく直接キー名を型として定義している
  // これにより、 item.label を使って formData に安全にアクセスできるからエラーが出ない
  type FormItem =
    | { label: keyof FormLog; type: "input"; inputType: string }
    | { label: keyof FormLog; type: "select"; options: string[] };

  const itemsForUi: FormItem[] = [
    { label: "date", type: "input", inputType: "date" },
    { label: "mountain", type: "input", inputType: "text" },
    {
      label: "weather", type: "select", options: [
        "Clear",
        "Partially sunny",
        "Mostly cloudy",
        "Cloudy",
        "Light rain",
        "Rain",
        "Heavy rain",
        "Thunderstorm",
        "Snow",
        "Fog / Mist"
      ]
    },
    { label: "start", type: "input", inputType: "time" },
    { label: "goal", type: "input", inputType: "time" },
    { label: "breakMin", type: "input", inputType: "number" },
    { label: "entry", type: "input", inputType: "text" },
    { label: "exit", type: "input", inputType: "text" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ( // To be refactored in the future
      !formData.date ||
      !formData.mountain ||
      !formData.weather ||
      !formData.start ||
      !formData.goal
    ) {
      alert("Please fill all the fields");
      return;
    }

    const l = formLogToLog(formData); // Convert formData to DomainLog
    const newLog = logToStoredLog(l); // Convert DomainLog to StoredLog
    addLog(newLog);

    resetForm();
    onCancel();
  }

  const handleCancel = () => {
    const ok = window.confirm("Are you sure to cancel?");
    if (!ok) return;

    resetForm();
    onCancel(); // ← Modal close
  }


  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="overflow-y-auto max-h-full flex flex-col justify-center items-center gap-5"
    >
      {itemsForUi.map((item) => {
        return (
          <div
            key={item.label}
            className="flex flex-col items-start gap-2"
          >
            <label htmlFor={item.label} className="text-xs text-(--color)">
              {item.label === "breakMin" ? "Break Mins" : item.label.charAt(0).toUpperCase() + item.label.slice(1)}
            </label>

            {item.type === "input" ? (
              <input
                id={item.label}
                type={item.inputType}
                value={formData[item.label]}
                onChange={handleChange}
                className="bg-(--inputColor) max-w-50 min-w-50 w-50 p-2 text-xs rounded-xl"
              />
            ) : (
              <select
                id={item.label}
                value={formData[item.label]}
                onChange={handleChange}
                className="bg-(--inputColor) max-w-50 min-w-50 w-50 p-2 text-xs rounded-xl"
              >
                <option value="">Select weather</option>
                {item.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}

              </select>
            )}
          </div>
        )
      })}

      <div className="flex gap-10 pt-4">
        <button
          id="form"
          type="button"
          onClick={handleCancel}
          className="py-2 px-4 border-none rounded-xl bg-gray-400 hover:bg-gray-500 text-white"
        >
          Cancel
        </button>
        <button
          id="form"
          type="submit"
          className="py-2 px-4 border-none rounded-xl bg-lime-700 text-white"
        >
          Add
        </button>
      </div>
    </form >
  )
}