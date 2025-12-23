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
      start: "",
      goal: "",
      breakMin: "",
      entry: "",
      exit: "",
    })
  }

  // formData のキー名（"Date" | "Mountain" | ...）だけを label として使う型
  // 文字列、などではなく直接キー名を型として定義している
  // これにより、 item.label を使って formData に安全にアクセスできるからエラーが出ない
  type items = { label: keyof typeof formData, inputType: string }

  const itemsForUi: items[] = [
    { label: "date", inputType: "date" },
    { label: "mountain", inputType: "text" },
    { label: "start", inputType: "time" },
    { label: "goal", inputType: "time" },
    { label: "breakMin", inputType: "number" },
    { label: "entry", inputType: "text" },
    { label: "exit", inputType: "text" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData) return;
    // ここでweather APIを呼ぶ関数を入れる
    const l = formLogToLog(formData); // Convert formData to DomainLog
    console.log("formからLogに変換：", l)
    const newLog = logToStoredLog(l); // Convert DomainLog to StoredLog
    console.log("Logからstorage用に変換：", l)
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
            className="flex flex-col items-start gap-2">
            <label htmlFor={item.label} className="text-xs text-(--color)">{item.label === "breakMin" ? "Break Mins" : item.label.charAt(0).toUpperCase() + item.label.slice(1)}</label>
            <input
              id={item.label}
              type={item.inputType}
              value={formData[item.label]}
              onChange={handleChange}
              className="bg-(--inputColor) max-w-50 min-w-50 w-50 p-2 text-xs rounded-xl"
            />
          </div>
        )
      })}
      <div className="flex gap-10 pt-4">
        <button
          id="form"
          type="button"
          onClick={handleCancel}
          className="py-2 px-4 border-none rounded-xl bg-amber-500 text-white"
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