import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addGame: (game) => {
        const cart = get().cart;
        const existingGame = cart.find((item) => item.id === game.id);
        if (existingGame) {
          set({
            cart: cart.map((item) =>
              item.id === game.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ cart: [...cart, { ...game, quantity: 1 }] });
        }
      },
      removeGame: (gameId) => {
        set((state) => ({
          cart: state.cart.filter((game) => game.id !== gameId),
        }));
      },
      updateGameQuantity: (gameId, quantity) => {
        set((state) => ({
          cart: state.cart.map((game) =>
            game.id === gameId ? { ...game, quantity } : game
          ),
        }));
      },
      clearCart: () => {
        set({ cart: [] });
      },
      getTotalItems: () => {
        return get().cart.reduce(
          (total, game) => total + game.quantity,
          0
        );
      },
      getTotalPrice: () => {
        return get().cart.reduce(
          (total, game) => total + game.price * game.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
      storage: localStorage,
    }
  )
);

export default useCartStore;
