//@/components/mainView/Header.tsx

import { Dispatch, SetStateAction } from "react"

type Props = {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
};

export function Header({ keyword, setKeyword }: Props) {

  return (
    <input
      type="text"
      value={keyword}
      className="bg-(--foreground) w-[80%] h-20 pl-6 rounded-full"
      placeholder="Put a mountain name"
      onChange={(e) => setKeyword(e.target.value)}
    />
  )
}