//@/components/mainView/Header.tsx
import { useState } from "react"
import { useLogStore } from "@/stores/logStore"
import { filterLogs } from "@/utils/filterLogs"


export function Header() {
  const { storedLogs } = useLogStore();
  const [mountainName, setMountainName] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMountainName(e.target.value)
    filterLogs(storedLogs, mountainName)
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