import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newProduct: ProductProps) => void;
  removeItemCart: (product: CartProps) => void;
  total: string;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newProduct: ProductProps) {
    const indexItem = cart.findIndex((item) => item.id === newProduct.id);

    if (indexItem !== -1) {
      let cartList = [...cart];
      cartList[indexItem].amount += 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalCart(cartList);
      return;
    }

    let data = {
      ...newProduct,
      amount: 1,
      total: newProduct.price,
    };
    const updatedCart = [...cart, data];
    setCart(updatedCart);
    totalCart(updatedCart);
  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      let cartList = [...cart];
      cartList[indexItem].amount -= 1;
      cartList[indexItem].total -= cartList[indexItem].price;

      setCart(cartList);
      totalCart(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
    totalCart(removeItem);
  }

  function totalCart(items: CartProps[]) {
    const result = items.reduce((acc, obj) => acc + obj.total, 0);
    const resultFormatted = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setTotal(resultFormatted);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
