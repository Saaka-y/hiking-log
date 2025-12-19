//@/components/mainView/Item.tsx
import { Dispatch, SetStateAction } from "react";

type Props = {
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