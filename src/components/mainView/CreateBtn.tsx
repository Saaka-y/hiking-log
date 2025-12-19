//@/components/mainView/CreateBtn.tsx

export function CreateBtn({ setIsModalOpen }) {

  const openModal = () => {

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