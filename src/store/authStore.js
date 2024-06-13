import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      username: null,
      login: (username) => set({ isLoggedIn: true, username }),
      logout: () => set({ isLoggedIn: false, username: null }),
    }),
    {
      name: "auth-storage", // Name in storage
      storage: localStorage, // Use localStorage directly
    }
  )
);

export default useAuthStore;
