import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set) => ({
      cartItems: [],
      addItem: (productDetails) =>
        set((state) => {
          const isItem = state.cartItems.find(
            (item) => item.id === productDetails.id,
          );

          if (isItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === productDetails.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            cartItems: [...state.cartItems, { ...productDetails }],
          };
        }),
    }),
    {
      name: "cart",
    },
  ),
);
