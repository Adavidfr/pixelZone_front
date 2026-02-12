import { create } from "zustand"

export type CartItem = {
  appid: string
  title: string
  imageUrl: string
  price: number 
  qty: number
}

type CartState = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "qty">) => void
  removeItem: (appid: string) => void
  increase: (appid: string) => void
  decrease: (appid: string) => void
  clear: () => void
  totalItems: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.appid === item.appid)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.appid === item.appid ? { ...i, qty: i.qty + 1 } : i
          ),
        }
      }
      return { items: [...state.items, { ...item, qty: 1 }] }
    }),

  removeItem: (appid) =>
    set((state) => ({ items: state.items.filter((i) => i.appid !== appid) })),

  increase: (appid) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.appid === appid ? { ...i, qty: i.qty + 1 } : i
      ),
    })),

  decrease: (appid) =>
    set((state) => ({
      items: state.items
        .map((i) =>
          i.appid === appid ? { ...i, qty: Math.max(1, i.qty - 1) } : i
        )
        .filter((i) => i.qty > 0),
    })),

  clear: () => set({ items: [] }),

  totalItems: () => get().items.reduce((acc, i) => acc + i.qty, 0),

  totalPrice: () => get().items.reduce((acc, i) => acc + i.price * i.qty, 0),
}))
