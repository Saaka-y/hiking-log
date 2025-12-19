//@/components/mainView/List.tsx


import { Item } from "@/components/mainView/Item"

export function List({setLogIsOpen}) {
  return(
    <ul className="bg-(--foreground) w-[80%] h-full my-3">
      {/* map */}
      <Item setLogIsOpen={setLogIsOpen} />
    </ul>
  )
}