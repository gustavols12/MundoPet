import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export function Cart() {
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

  // controle input
  const [isFocused, setIsFocused] = useState(false);

  // formas de pagamento
  const [paymentMethod, setPaymentMethod] = useState("");
  const [installments, setInstallments] = useState("1x");

  // relacionados ao cupom
  const [isvalid, setIsValid] = useState(false);
  const [cupom, setCupom] = useState("");
  const cupons = ["primeira10", "primeira", "mundopet", "mundopet10"];
  const numericTotal = Number(
    total.replace("R$", "").replace(/\./g, "").replace(",", ".")
  );
  const discountedTotal = numericTotal - numericTotal * 0.1;

  function validateCoupon() {
    if (cupons.includes(cupom.toLowerCase())) {
      toast.success("Cupom validado");
      setIsValid(true);
      setIsFocused(false);
      return;
    }
    toast.error("Cupom invalido");
  }

  function generateOrderMessage() {
    let mensagem = "Olá, pedido aprovado!:%0A";
    cart.forEach((item) => {
      mensagem += `🛒 ${item.title} - ${item.amount}x = R$ ${item.total.toFixed(
        2
      )}%0A`;
    });

    mensagem += `%0A🔢 Total: ${
      isvalid
        ? discountedTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        : total
    }`;

    return mensagem;
  }

  function handleCheckoutViaWhatsApp() {
    const numero = "5541995566353";
    const mensagem = generateOrderMessage();
    const link = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(link, "_blank");
  }

  return (
    <main className="w-full max-w-7xl px-4 mx-auto my-6">
      <h1 className="font-medium text-2xl text-center my-4 text-[#FF9019] italic">
        Meu carrinho
      </h1>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-medium text-2xl text-center my-4">
            Ops seu carrinho está vazio...
          </h2>
          <Link
            to="/"
            className="bg-[#FF9019] my-3 p-1 text-white font-medium rounded"
          >
            Acessar produtos
          </Link>
        </div>
      )}

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <div className="flex-1">
          {cart.map((item) => (
            <section
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between border-1 border-[#f1ddc7c2] mt-5 rounded px-2 py-3 gap-4"
            >
              <img
                className="w-28 rounded-lg max-h-70"
                src={item.cover}
                alt="Logo do produto"
              />
              <strong className="text-[#454545]"> R${item.price}</strong>

              <div className="flex items-center justify-center gap-3">
                <button
                  className="bg-[#FF9019] px-2 rounded text-white font-medium"
                  onClick={() => removeItemCart(item)}
                >
                  -
                </button>
                {item.amount}
                <button
                  className="bg-[#FF9019] px-2 rounded text-white font-medium"
                  onClick={() => addItemCart(item)}
                >
                  +
                </button>
              </div>

              <strong className="text-[#454545]">
                SubTotal:
                {item.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </section>
          ))}
          {cart.length !== 0 && (
            <p className="font-bold mt-4 text-[#454545]">Total: {total}</p>
          )}
        </div>

        {cart.length > 0 && (
          <div className="w-full max-w-md">
            <div className="bg-[#fcfcfca8] border-1 border-[#f1ddc7c2] rounded p-4 mb-4">
              <h2 className="font-bold text-2xl mt-4 mb-2 text-[#ff9019] italic">
                Cupom de desconto
              </h2>

              <div className="p-2 rounded text-center relative">
                <input
                  className="border-1 border-[#ff9019] h-9 rounded-md outline-none p-2 mb-1 bg-white w-full"
                  type="text"
                  name="cupom"
                  placeholder="Insira seu cupom"
                  value={cupom}
                  onChange={(e) => setCupom(e.target.value)}
                  onInput={() => setIsFocused(true)}
                />

                {/* adiciona o span no input */}
                {isFocused && (
                  <span
                    onClick={validateCoupon}
                    className="absolute right-5 top-3 text-[#ff9019] font-semibold cursor-pointer"
                  >
                    Validar
                  </span>
                )}
              </div>
            </div>

            <span className="text-[#FF9019] font-semibold">
              Resumo do pedido
            </span>

            <div className="flex items-center justify-between mb-2">
              <p className="font-bold text-[#FF9019] italic">
                valor dos produtos
              </p>
              <span className="font-bold text-[#454545]">{total}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="font-bold text-[#FF9019] italic">
                <p>Total</p>
              </div>
              <div className="flex flex-col text-end text-[#454545]">
                <p>{total}</p> <span>ou em 2x sem juros</span>
              </div>
            </div>

            {/* valida cupom */}

            {isvalid && (
              <div className="flex items-center justify-between">
                <p className="font-bold text-[#FF9019] italic">
                  Valor com desconto
                </p>
                <div className="flex flex-col text-end">
                  <span className="font-bold text-[#454545]">
                    {discountedTotal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <p className="text-[#454545]">Cupom: {cupom}</p>
                </div>
              </div>
            )}

            {/*  - Forma de pagamento */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#FF9019] mb-1">
                Forma de pagamento
              </label>
              <select
                className="w-full p-2 border rounded-md outline-none"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="credit">Cartão de Crédito</option>
                <option value="debit">Cartão de Débito</option>
                <option value="pix">Pix</option>
                <option value="boleto">Boleto</option>
                <option value="dinheiro">Dinheiro</option>
              </select>
            </div>

            {paymentMethod === "credit" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#FF9019] mb-1">
                  Parcelamento
                </label>
                <select
                  className="w-full p-2 border rounded-md outline-none"
                  value={installments}
                  onChange={(e) => setInstallments(e.target.value)}
                >
                  <option value="1x">1x sem juros</option>
                  <option value="2x">2x sem juros</option>
                </select>
              </div>
            )}

            <button
              className="p-2 rounded bg-[#fa9f3d] text-white font-bold w-full mb-2"
              onClick={handleCheckoutViaWhatsApp}
            >
              Finalizar carrinho
            </button>
            <Link to="/">
              <button className="p-2 rounded border border-[#f1ddc7c2] text-[#FF9019] font-bold w-full">
                escolher mais produtos
              </button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
