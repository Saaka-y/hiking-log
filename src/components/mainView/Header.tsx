//@/components/mainView/Header.tsx
import { useState } from "react"
import { useLogStore } from "@/stores/logStore"
import { filterLogs } from "@/utils/filterLogs"


export function Header() {
  const { logs } = useLogStore();
  const [mountainName, setMountainName] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMountainName(e.target.value)
    filterLogs(logs, mountainName)
  }

  return (
    <>
      {/* search window */}
      <input
        type="text"
        value={mountainName}
        className="bg-(--foreground) w-[80%] h-20"
        onChange={handleSearch}
      />
    </>
  )
}