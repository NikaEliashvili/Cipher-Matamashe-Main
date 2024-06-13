import { create } from "zustand";

const useScreenStore = create((set) => ({
  screenWidth: window.innerWidth,
  setScreenWidth: (width) => set({ screenWidth: width }),
}));

export default useScreenStore;
