import Modal from 'react-modal'

type CommonModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export function CommonModal({ isOpen, closeModal, children }: CommonModalProps) {
  return (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center "
        className="bg-(--foreground) w-96 max-w-[80%] max-h-[90%] p-6 rounded-lg overflow-y-auto overflow-x-hidden"

      >
        {children}
      </Modal>

  );
}
