import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));
