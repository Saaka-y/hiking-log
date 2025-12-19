//@/components/mainView/List.tsx

import { Dispatch, SetStateAction } from 'react';
import { Item } from "@/components/mainView/Item"

type Props = {
  setLogIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function List({ setLogIsOpen }: Props) {
  return (
    <ul className="bg-(--foreground) w-[80%] h-full my-3">
      {/* map */}
      <Item setLogIsOpen={setLogIsOpen} />
    </ul>
  )
}
