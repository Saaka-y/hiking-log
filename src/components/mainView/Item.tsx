
import { useLogStore } from "@/stores/logStore";

export function Item({ setLogIsOpen }) {
  const { logs } = useLogStore();

  const openLog = () => {
    setLogIsOpen(true);

  }

  return (
    <li onClick={openLog}>
      {/* UI for each log */}
    </li>
  )
}