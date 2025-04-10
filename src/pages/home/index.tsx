import { BsCartPlus } from "react-icons/bs";
import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProduts();
  }, []);

  function handleAddCart(produto: ProductProps) {
    addItemCart(produto);
    toast.success("Produto adicionado!");
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-3xl mb-10 mt-10 text-center text-[#FF9019] italic">
          Produtos mais vendidos
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {products.map((item) => (
            <section
              key={item.id}
              className="transition-shadow duration-200 hover:shadow-md rounded px-2"
            >
              <Link to={`/products/${item.id}`}>
                <img src={item.cover} alt={item.title} />
              </Link>
              <p className="text-[#1d1d1d]">{item.title}</p>
              <div className="flex items-center py-1">
                <span className="font-bold text-[#454545]">
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <button className="px-2" onClick={() => handleAddCart(item)}>
                  <BsCartPlus size={22} color="#FF9019" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
