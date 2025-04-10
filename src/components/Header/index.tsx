import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

export function Header() {
  const { cart, removeItemCart, addItemCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="w-full relative">
      <nav className="w-full h-16 flex items-center justify-between max-w-7xl px-5 mx-auto">
        <Link to="/" className="font-bold text-2xl flex gap-1 items-center">
          <span className="bg-gradient-to-r from-[#FE7518] to-yellow-500 bg-clip-text text-transparent italic">
            Mundo Pet
          </span>
        </Link>

        <div
          className="relative cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <FiShoppingCart size={24} color="#FE7518" />
          {cart.length > 0 && (
            <span className="absolute -top-4 -right-3 px-2.5 bg-[#FF9019] rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
              {cart.length}
            </span>
          )}
        </div>
      </nav>

      {/* SIDE CART */}
      {showCart && (
        <>
          <div
            className="fixed inset-0  z-40"
            onClick={() => setShowCart(false)}
          ></div>

          <div className="fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-white z-50 p-4 shadow-lg border-l border-gray-200 overflow-y-auto transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Confira sua compra</h2>
              <button
                className="text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setShowCart(false)}
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500">Seu carrinho está vazio.</p>
            ) : (
              cart.map((item) => (
                <section
                  key={item.id}
                  className="flex flex-col gap-2 border-b border-gray-200 pb-4 mb-4"
                >
                  <div className="flex gap-4 items-start">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src={item.cover}
                      alt={item.title}
                    />
                    <div className="flex flex-col justify-between flex-grow">
                      <strong className="text-[#454545] block">
                        {item.title}
                      </strong>
                      <span className="text-sm text-gray-600">
                        R$ {item.price.toFixed(2)}
                      </span>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="bg-[#FF9019] px-2 rounded text-white"
                          onClick={() => removeItemCart(item)}
                        >
                          -
                        </button>
                        <span className="text-sm">{item.amount}</span>
                        <button
                          className="bg-[#FF9019] px-2 rounded text-white"
                          onClick={() => addItemCart(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700">
                    Subtotal:{" "}
                    {item.total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                </section>
              ))
            )}

            {cart.length > 0 && (
              <Link to="/cart">
                <button
                  className="w-full mt-4 bg-[#FF9019] text-white py-2 rounded"
                  onClick={() => setShowCart(false)}
                >
                  Ir para carrinho
                </button>
              </Link>
            )}
          </div>
        </>
      )}
    </header>
  );
}
