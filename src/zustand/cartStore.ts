import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../../types/types";

interface CartStoreActions {
  addToCart: (product: Product) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartStoreState extends CartStoreActions {
  cartItems: CartItem[];
}

const useCartStore = create<CartStoreState>(
  persist<CartStoreState>(
    (set) => ({
      cartItems: [],
      addToCart: (product: Product) => {
        set((state) => {
          const existingProduct = state.cartItems.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            const updatedCartItems = state.cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            return { cartItems: updatedCartItems };
          } else {
            return {
              cartItems: [...state.cartItems, { ...product, quantity: 1 }],
            };
          }
        });
      },
      incrementQuantity: (productId: number) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },
      decrementQuantity: (productId: number) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }));
      },
      removeFromCart: (productId: number) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        }));
      },
      clearCart: () => {
        set({ cartItems: [] });
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  ) as any
);

export default useCartStore;
