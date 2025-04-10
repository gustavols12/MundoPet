import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { ProductProps } from "../home";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";

export function Detail() {
  const [product, setProduct] = useState<ProductProps>();
  const { id } = useParams();

  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`products/${id}`);
      setProduct(response.data);
    }
    getProduct();
  }, []);

  function handleAddCart(produto: ProductProps) {
    addItemCart(produto);
    toast.success("Produto adicionado!");
  }
  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full mt-5">
            <div className="flex flex-col lg:flex-row">
              <img
                className="flex-1 w-full object-contain max-h-72"
                src={product?.cover}
                alt={product?.title}
              />
              <div className="flex-1">
                <p className="font-bold text-2xl mt-4 mb-2  text-[#FF9019] italic">
                  {product?.title}
                </p>
                <p className="my-4 text-[#1d1d1d]">{product.description}</p>
                <span className=" text-[#252525] font-bold">
                  {product?.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <button
                  className="p-1 rounded ml-3 bg-[#FF9019] text-white font-bold"
                  onClick={() => handleAddCart(product)}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
