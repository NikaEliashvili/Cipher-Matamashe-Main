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
      getStorage: () => localStorage, // Use localStorage (default)
    }
  )
);

export default useAuthStore;
