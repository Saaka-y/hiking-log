//@/components/formModal/Form.tsx
import { useState } from "react";

export function Form() {
  const [formData, setFormData] = useState({
    Date: "",
    Mountain: "",
    Start: "",
    Goal: "",
    Break: "",
    Entry: "",
    Exit: "",
  })

  // formData のキー名（"Date" | "Mountain" | ...）だけを label として使う型
  // 文字列、などではなく直接キー名を型として定義している
  // これにより、 item.label を使って formData に安全にアクセスできるからエラーが出ない
  type items = { label: keyof typeof formData, inputType: string }

  const itemArray: items[] = [
    { label: "Date", inputType: "date" },
    { label: "Mountain", inputType: "text" },
    { label: "Start", inputType: "time" },
    { label: "Goal", inputType: "time" },
    { label: "Break", inputType: "number" },
    { label: "Entry", inputType: "text" },
    { label: "Exit", inputType: "text" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 処理
  }

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="overflow-y-auto max-h-full flex flex-col justify-center items-center gap-5"
    >
      {itemArray.map((item) => {
        return (
          <div
            key={item.label}
            className="flex flex-col items-start gap-2">
            <label htmlFor={item.label} className="text-xs text-black">{item.label}</label>
            <input 
              id={item.label} 
              type={item.inputType} 
              value={formData[item.label]}
              onChange={handleChange}
              className="bg-blue-50 max-w-50 min-w-50  p-2 text-xs rounded-xl"
            />
          </div>
        )
      })}
      <div className="flex gap-10 pt-4">
        <button id="form" className="py-2 px-4 border-none rounded-xl bg-amber-500 text-white">Cancel</button>
        <button id="form" className="py-2 px-4 border-none rounded-xl bg-lime-700 text-white">Add</button>
      </div>
    </form>
  )
}