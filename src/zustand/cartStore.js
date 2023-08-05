import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (product) => {
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
        return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
      }
    });
  },
  incrementQuantity: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },
  decrementQuantity: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }));
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    }));
  },
  clearCart: () => {
    set({ cartItems: [] });
  },
}));
console.log(useCartStore.cartItems);
export default useCartStore;
