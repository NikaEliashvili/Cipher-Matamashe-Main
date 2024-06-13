import { create } from "zustand";

const usesidebarStore = create((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default usesidebarStore;
