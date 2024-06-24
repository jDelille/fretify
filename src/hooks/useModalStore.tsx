import { create } from 'zustand';

type ModalState = {
  [key: string]: boolean;
};

type ModalStore = {
  modals: ModalState;
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
};

const useModalStore = create<ModalStore>((set) => ({
  modals: {},
  openModal: (modalName: string) => {
    console.log(`Opening modal: ${modalName}`);
    set((state) => ({
      modals: { ...state.modals, [modalName]: true },
    }));
  },
  closeModal: (modalName: string) => {
    console.log(`Closing modal: ${modalName}`);
    set((state) => ({
      modals: { ...state.modals, [modalName]: false },
    }));
  },
}));

export default useModalStore;