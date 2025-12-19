//@/components/mainView/CreateBtn.tsx
import { Dispatch, SetStateAction } from "react";

type Props = {
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function CreateBtn({ setFormIsOpen }: Props) {

  const openModal = () => {
    setFormIsOpen(true);
  }

  return (
    <>
      {/* Show form modal */}
      <button
        onClick={openModal}
        className="py-2 px-4 border-none rounded-xl bg-lime-700 text-white"
      >
        Create new log
      </button>
    </>
  )
}