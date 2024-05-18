import { create } from "zustand";

const useuseSidebarStore = create((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useuseSidebarStore;
