//@/components/mainView/Item.tsx
import { Dispatch, SetStateAction } from "react";
import { Log } from "@/types/log";

type Props = {
  key: string;
  log: Log;
  setLogIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function Item({ setLogIsOpen }: Props) {


  const openLog = () => {
    setLogIsOpen(true);

  }

  return (
    <li onClick={openLog}>
      {/* UI for each log */}
    </li>
  )
}