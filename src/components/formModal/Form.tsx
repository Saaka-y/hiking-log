//@/components/formModal/Form.tsx
import { useState } from "react";
import { useLogStore } from "@/stores/logStore";
import { FormLog } from "@/types/log";
import { formLogToLog, logToStoredLog } from "@/utils/logConverter";
import { WEATHER_OPTIONS } from "@/constants/weather";

type Props = {
  onCancel: () => void;
}

export function Form({ onCancel }: Props) {
  const { addLog } = useLogStore();

  const [formData, setFormData] = useState<FormLog>({
    date: "",
    mountain: "",
    weather: "Clear",
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
      weather: "Clear",
      start: "",
      goal: "",
      breakMin: "",
      entry: "",
      exit: "",
    })
  }

  // Type definition for form items
  // Using keyof FormLog ensures we can only reference valid form fields
  type FormItem =
    | { label: keyof FormLog; type: "input"; inputType: string }
    | { label: keyof FormLog; type: "select"; options: readonly string[] };

  const itemsForUi: FormItem[] = [
    { label: "date", type: "input", inputType: "date" },
    { label: "mountain", type: "input", inputType: "text" },
    { label: "weather", type: "select", options: WEATHER_OPTIONS },
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
    
    // Improved validation with specific error messages
    if (!formData.date || !formData.mountain || !formData.weather || !formData.start || !formData.goal) {
      alert("Please fill all required fields (Date, Mountain, Weather, Start, Goal)");
      return;
    }

    // Validate that breakMin is not negative
    const breakMinNum = Number(formData.breakMin);
    if (formData.breakMin && breakMinNum < 0) {
      alert("Break minutes cannot be negative");
      return;
    }

    // Validate that goal time is after start time
    if (formData.start && formData.goal && formData.date) {
      const startTime = new Date(`${formData.date}T${formData.start}`);
      const goalTime = new Date(`${formData.date}T${formData.goal}`);
      if (goalTime <= startTime) {
        alert("Goal time must be after start time");
        return;
      }
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
          type="button"
          onClick={handleCancel}
          className="py-2 px-4 border-none rounded-xl bg-gray-400 hover:bg-gray-500 text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="py-2 px-4 border-none rounded-xl bg-lime-700 text-white"
        >
          Add
        </button>
      </div>
    </form >
  )
}