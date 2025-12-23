//@/components/mainView/Header.tsx
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Dispatch, SetStateAction } from "react"

type Props = {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
};

export function Header({ keyword, setKeyword }: Props) {

  return (
    <div className="flex justify-between items-center bg-(--foreground) w-[80%] h-16 px-6 md:px-10 rounded-full">
    <input
      type="text"
      value={keyword}
      className=" h-full"
      placeholder="Put a mountain name"
      onChange={(e) => setKeyword(e.target.value)}
    />
      <HiMiniMagnifyingGlass size={18}  />
    </div>
  )
}