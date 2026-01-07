//@/components/mainView/CreateBtn.tsx

type Props = {
  onOpen: () => void;
}

export function CreateBtn({ onOpen }: Props) {

  return (
    <>
      {/* Show form modal */}
      <button
        onClick={onOpen}
        className="py-2 px-4 border-none rounded-xl bg-lime-700 text-white"
      >
        Create new log
      </button>
    </>
  )
}